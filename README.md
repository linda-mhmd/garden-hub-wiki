# Garten-Wiki

Ein wissenschaftlich fundiertes, praxiserprobtes **Garten-Wiki** für das
österreichische Klima. Pflanzenwissen pur – Aussaat, Pflege, Ernte,
Mischkultur und Klimaregionen.

## Inhalt

- **Pflanzenlexikon** – ausführliche Steckbriefe mit Anbauanleitung, Aussaat-
  und Erntefenstern, Sorten, Nachbarschaft und Wachstumsphasen
- **Grundlagen** – Leitfäden zu Boden, Bewässerung, Kompost, Düngung,
  Pflanzenschutz und Anzucht
- **Monatskalender** – was wann gesät, gepflanzt und geerntet wird
- **Glashaus-Guide** – Kulturen, Wintergemüse, Aufbau-Tipps
- **Prinzipien** – Fruchtfolge, Mischkultur, Staffelaussaat, Haltbarmachung
- **Klimaregionen** – die Anbauregionen Österreichs mit Klimadaten
- **Werkzeug & Quellen**

Der interaktive **Ertragsrechner mit Beetvisualisierung** ist ein eigenständiges
Werkzeug und lebt auf **[ernterechner.com](https://ernterechner.com)**.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Reine statische Single-Page-App – kein Backend, keine Anmeldung, keine
  Datenerfassung. Persönliche Notizen (z. B. Pflanzdaten) bleiben ausschließlich
  im Browser des Besuchers (localStorage).

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server
npm run build      # Produktionsbuild nach dist/
npm run preview    # Build lokal ansehen
```

## Deployment

Automatisch via GitHub Actions (`.github/workflows/deploy.yml`) auf **GitHub Pages**
bei jedem Push auf `main`. Aktiviere in den Repository-Einstellungen unter
**Settings → Pages** die Quelle **GitHub Actions**. Dank relativer Pfade läuft die
Seite sowohl unter `https://mzzavaa.github.io/garden-hub-wiki/` als auch unter einer
eigenen Domain.

## Herkunft & Datenschutz

Herausgelöst aus dem privaten `garden-hub`-Projekt als eigenständiges,
öffentliches Nachschlagewerk. Enthält ausschließlich allgemeines Pflanz- und
Gartenwissen mit Bezug auf das österreichische/pannonische Klima – **keine
personenbezogenen Daten, Adressen, Standortkoordinaten oder Details zu einem
konkreten Grundstück**.
