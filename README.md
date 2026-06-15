# M431 – Projekt Kontrolle und Auswertung: Passwort-Generator Web-Applikation

Eine moderne, schlanke und datenschutzkonforme Web-Applikation zur Erzeugung kryptografisch sicherer Passwörter. Das Projekt wurde im Rahmen des Moduls **M431** entwickelt und kombiniert eine intuitive Benutzeroberfläche mit mathematisch fundierter Entropie-Berechnung in Echtzeit.

---

## Projektdaten

- **Modul:** M431
- **Gruppe:** Gruppe 2
- **Team:** Gian, Lion, Ilian

---

## Features

- **Kryptografisch sichere Zufallswerte:** Nutzung der `window.crypto.getRandomValues`-API anstelle von `Math.random()`.
- **Echtzeit-Stärkenanalyse:** Dynamische Berechnung der Passwort-Entropie (in Bits) parallel zur Eingabe.
- **Visuelles Feedback:** Sofortige farbliche Signalisierung der Passwortstärke von „Sehr schwach“ bis „Sehr stark“.
- **Flexible Konfiguration:** Individuelle Anpassung der Länge (8–64 Zeichen) sowie exakte Zeichensatzfilterung (Gross-/Kleinbuchstaben, Zahlen, Sonderzeichen).
- **Responsive Design:** Optimierte CSS-Flexbox-Struktur für nahtlose Bedienung auf Desktop- und Mobilgeräten.
- **Cross-Browser-Kompatibel:** Getestet und optimiert für Google Chrome, Mozilla Firefox, Microsoft Edge und Apple Safari.

---

## Technologie-Stack

- **Frontend:** Semantisches HTML & Modernes, responsives CSS
- **Logik & Algorithmen:** Pure JavaScript

---

## Projektstruktur

```text
├── index.html        # Semantische Struktur der Web-Applikation
├── styles.css        # Zentrales Design-System und responsive Layouts
├── lib.js            # Passwort-Utility-Bibliothek (Kern-Algorithmus & Entropie)
├── script.js         # UI-Controller und Event-Handling (DOM-Interaktion)
└── README.md         # Projektdokumentation (diese Datei)
.
