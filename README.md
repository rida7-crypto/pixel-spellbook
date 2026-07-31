<div align="center">

<img src="./spellbook-corner.svg" width="72" align="left" alt="floating spellbook corner mascot">
<img src="./candle-corner.svg" width="72" align="right" alt="flickering candle corner mascot">

# Pixel Spellbook

[![Platform](https://img.shields.io/badge/platform-Windows-blue?style=flat-square)](#)
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F?style=flat-square&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License: ISC](https://img.shields.io/badge/license-ISC-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)](#)

A magical pixel-art to-do list that hovers on your desktop by candlelight, rather than sitting in a window.

</div>

---

## Overview

Pixel Spellbook reimagines the everyday to-do list as a page from a wizard's grimoire — tasks become spells to cast, and a flickering candle keeps you company as you work through them, built entirely with Electron.

What sets it apart from a typical task manager is that it isn't a window at all in the traditional sense. Pixel Spellbook is a transparent, borderless, always-on-top widget that floats directly on your desktop above everything else — no taskbar-anchored box, no fixed frame competing for space. Drag it wherever you like and it stays there, a quiet magical presence rather than another application demanding a dedicated window of its own.

---

## Features

- **A true floating desktop companion** — transparent, borderless, always-on-top, and fully draggable anywhere on screen; it never feels like a normal app window, more like a spellbook left open beside you
- **Pixel-art grimoire aesthetic** — a custom-drawn interface styled around candlelight, parchment, and hand-drawn magical detail
- **Living candle animation** — a hand-pixeled flame that flickers continuously with its own soft, pulsing aura, rather than a static icon
- **The book itself floats too** — a subtle bob and glow on the spellbook icon, a small visual echo of the fact that the whole app hovers rather than sits in a fixed window
- **Lightweight task management** — add, complete, and manage your to-dos ("spells") without the overhead of a full productivity suite
- **Minimal, distraction-free interface** — designed to sit quietly on your desktop without pulling focus from your actual work

---

## Tech Stack

| Layer | Technology |
|---|---|
| Application shell | Electron (via Electron Forge) |
| Logic | JavaScript (CommonJS) |
| Interface & graphics | HTML, CSS3 animations, pixel-art assets |
| Packaging | Electron Forge (Squirrel, deb, rpm, zip makers) |

---

## Project Structure

```
pixel-spellbook/
├── main.js              Electron main process — window management, IPC
├── index.html            App layout, pixel-art graphics, CSS animations
├── forge.config.js       Electron Forge build & packaging configuration
├── package.json          Project metadata and scripts
├── icon.ico / icon.png / icon.svg   Application icons
└── .gitignore
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later recommended
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/rida7-crypto/pixel-spellbook.git
cd pixel-spellbook
npm install
```

### Run the app

```bash
npm start
```

### Package / build a distributable

```bash
npm run package
```

or

```bash
npm run make
```

---

## Usage

1. Launch the app — it opens as a floating widget on your desktop rather than a standard window.
2. Add tasks to your spellbook and mark them complete as you work through them.
3. Drag the widget anywhere on screen; it stays exactly where you leave it, always on top.
4. The candle stays lit and flickering throughout, a quiet visual companion rather than a static UI element.

---

## Preview


https://github.com/user-attachments/assets/29dc762d-0708-4eb8-ad00-812e7f21baf7


---

## Roadmap

- [ ] macOS and Linux builds
- [ ] Custom spell/task categories
- [ ] Additional candle and parchment themes
- [ ] System tray support

---

## License

Distributed under the ISC License. See `LICENSE` for details.

---

## Author

**Rida**
[GitHub](https://github.com/rida7-crypto)

</div>
