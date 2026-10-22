# Deployment

Die Manifeste hier beschreiben, wie diese Seite im k3s-Cluster läuft. Sie
werden **nicht von hier aus** angewandt, sondern von Argo CD gelesen.

## Wie es zusammenhängt

```
1. dieses Repo, push auf main
     → Deploy-Workflow: Image bauen (nativ amd64), starten, auf HTTP 200
       prüfen, nach ghcr.io pushen
     → deploy/kustomization.yaml auf :<sha> pinnen und als Branch
       `production` pushen (nur, wenn der Lauf zur Spitze von main gehört)

2. fws-maschsee/server-config
     → apps/homepage.yaml: Namespace + Application, die `production`,
       Pfad deploy/, liest

3. Cluster
     → Argo CD sieht den neuen Stand auf `production` und rollt aus
```

Auf `main` steht in `kustomization.yaml` nur ein Platzhalter-Tag; was läuft,
steht auf `production`. Den Namespace verwaltet server-config, nicht dieses
Repo — wie bei konto und den Klassenseiten (`patterns/app-deploy-ci` dort).

Bis Oktober 2026 lagen die Manifeste in server-config unter `apps/homepage/`,
und der Tag wurde dort von Hand aus der Run-Summary nachgetragen. Das blieb
liegen: Ein Image mit Node-Sicherheitsupdate war gebaut, lief aber nicht.

`server-config` ist **privat**; Argo CD liest es und dieses Repo über die
GitHub App `Server FWS Maschsee`.

## Was hier anders ist als bei den Klassenseiten

Drei Dinge, und alle drei haben denselben Grund: **Diese Seite ist
öffentlich.**

- **Kein Login, keine Auth-Middleware.** Nicht abgeschaltet, sondern gar nicht
  eingebaut — es gibt keinen Schalter, den jemand umlegen könnte.
- **`httpGet`-Probes statt `tcpSocket`.** Bei den Klassenseiten ist ein 401
  die gesunde Antwort, deshalb dort TCP. Hier ist alles außer 200 ein Fehler,
  und der Probe soll das merken.
- **Der Smoke-Test besteht auf HTTP 200**, nicht auf „irgendeine Antwort". Ein
  401 lässt den Deploy absichtlich scheitern: Er hieße, dass hier
  versehentlich ein Login davorgeraten ist.

Ebenfalls anders: Das GHCR-Paket darf öffentlich sein. In das Image wird nur
der Inhalt dieser Erklärseite kompiliert. Bei den Klassenseiten muss das Paket
privat bleiben, weil dort Protokolle und Unterlagen mit hineinkompiliert
werden.
