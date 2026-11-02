FROM node:26-alpine@sha256:c6ad9e9c1d80f6eb607c26b4b0a132ff7a2344fad1c78ea3baa2a7d4c8de6d94 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:26-alpine@sha256:c6ad9e9c1d80f6eb607c26b4b0a132ff7a2344fad1c78ea3baa2a7d4c8de6d94 AS runner

WORKDIR /app

ENV NODE_ENV=production
# `::` bindet dual-stack (IPv4 und IPv6).
ENV HOST=::
ENV PORT=3000

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/package-lock.json ./

# `npm ci`, nicht `npm install`: sonst andere Versionen als die, gegen die dist/ gebaut wurde.
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs", "--host", "0.0.0.0", "--port", "3000"]
