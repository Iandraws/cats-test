# 🐱 Cataas Website - Cats as a Service

Eine einfache Website mit HTML, CSS und JavaScript, die die [Cataas API](https://cataas.com) nutzt, um süße Katzenbilder anzuzeigen.

## Features

- 🐱 **Zufällige Katzenbilder** - Klick auf "Neue Katze laden" um ein zufälliges Katzenbild zu sehen
- 📝 **Text auf dem Bild** - Gib einen Text ein und die Katze wird ihn "sagen"
- 🏷️ **Nach Tags filtern** - Wähle aus verschiedenen Kategorien wie "cute", "funny" etc.
- ⬇️ **Bilder herunterladen** - Speichere deine Lieblingskatzen lokal
- 📱 **Responsive Design** - Funktioniert perfekt auf Desktop und Mobilgeräten

## 🚀 Live Demo

🔗 **GitHub Pages:** https://iandraws.github.io/cats-test/

## 📋 Lokal starten

### Option 1: Mit Python

```bash
cd cats-test
python -m http.server 8000
```

Öffne dann: `http://localhost:8000`

### Option 2: Mit Node.js

```bash
npx http-server
```

### Option 3: Einfach die Datei öffnen

Öffne die `index.html` direkt im Browser.

## 📁 Dateistruktur

- `index.html` - HTML-Struktur der Website
- `style.css` - Modernes CSS-Styling mit Gradient-Design
- `script.js` - JavaScript für die API-Interaktion
- `README.md` - Diese Datei

## 🔌 API

Diese Website nutzt die kostenlose [Cataas API](https://cataas.com):

- `/cat` - Zufälliges Katzenbilder
- `/cat/{tag}` - Katzen mit spezifischem Tag
- `/cat/says/{text}` - Katze mit Text-Overlay
- `/api/tags` - Liste aller verfügbaren Tags
- `/api/count` - Gesamtanzahl der Katzenbilder

## 🛠️ Technologien

- HTML5
- CSS3 (mit Flexbox, Grid, Gradient)
- Vanilla JavaScript (Fetch API)
- Cataas REST API

## 📝 Lizenz

Dieses Projekt ist offen und frei nutzbar.

---

**Powered by** [Cataas](https://cataas.com) - Cat as a Service API 🐾
