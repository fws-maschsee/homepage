# Deployment

Die beiden Manifeste hier beschreiben, wie diese Seite im k3s-Cluster läuft.
Sie werden **nicht von hier aus** angewandt.

## Wie es zusammenhängt

```
1. dieses Repo, push auf main
     → Deploy-Workflow: Image bauen (nativ amd64), starten, auf HTTP 200
       prüfen, nach ghcr.io pushen, Tag in der Zusammenfassung nennen

2. fws-maschsee/server-config
     → apps/homepage/kustomization.yaml: newTag von Hand eintragen

3. Cluster
     → Argo CD sieht die Änderung und rollt aus
```

## Einmalig einrichten

1. `app.yaml` und `kustomization.yaml` nach `apps/homepage/` in
   [fws-maschsee/server-config](https://github.com/fws-maschsee/server-config)
   kopieren (diese README bleibt hier).
2. `homepage/` in `apps/kustomization.yaml` dort eintragen.
3. DNS: Der A-Record des Apex `fws-maschsee-test.de` zeigt bereits auf den
   Knoten. Nichts zu tun.

`server-config` ist inzwischen **privat**; Argo CD liest es über die
GitHub App `Server FWS Maschsee`. Das ist eingerichtet.

## Bei jedem Rollout

Der Deploy-Workflow schreibt den zu setzenden Tag in seine Zusammenfassung.
Diesen Tag in `apps/homepage/kustomization.yaml` unter `newTag` eintragen und
pushen. Mehr passiert nicht — Argo CD erledigt den Rest.

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
