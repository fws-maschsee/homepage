# Zweistufiger Build: bauen mit allen Abhängigkeiten, ausliefern nur mit den
# Produktions-Abhängigkeiten.
FROM node:22-alpine AS builder

WORKDIR /app

# Erst nur die Manifeste kopieren, damit die npm-Schicht im Cache bleibt,
# solange sich die Abhängigkeiten nicht ändern.
COPY package.json package-lock.json ./

# `npm ci`, nicht `npm install`: Die Lockfile entscheidet, welche Versionen
# gebaut werden. Ein `npm install` würde die Ranges neu auflösen, und das Image
# enthielte etwas anderes als der geprüfte Build.
RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# `::` bindet dual-stack (IPv4 und IPv6).
ENV HOST=::
ENV PORT=3000

# Hier stehen bewusst KEINE Auth-Variablen. Diese Seite ist öffentlich; sie
# hat keine Auth-Middleware. Der Unterschied zu den Klassenseiten ist genau
# dieser, und er soll auch im Dockerfile sichtbar bleiben.

# Build-Artefakte und Server übernehmen. Die Lockfile MUSS mitkopiert werden,
# sonst kann die Runner-Stufe kein `npm ci` ausführen.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/package-lock.json ./

# Nur Produktionsabhängigkeiten installieren - und wieder `npm ci`, nicht
# `npm install`. Mit `npm install` löst npm die Ranges hier ein zweites Mal
# auf; das Image bekäme dann andere Versionen als die, gegen die dist/ gebaut
# wurde. Genau daran ist der Server schon einmal gestorben.
RUN npm ci --omit=dev

EXPOSE 3000

# Astro-SSR-Server auf allen Interfaces starten.
CMD ["node", "./dist/server/entry.mjs", "--host", "0.0.0.0", "--port", "3000"]
