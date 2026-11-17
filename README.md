# TIDE — Download Button

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/tide-download-button/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable recreation of the **Download Button** UI shown in the uploaded video.

## What is recreated
- TIDE browser-style header with HTML / CSS / JS labels
- Dark navy background and centered “Download Button” title
- Blue SUCCESS circular button with animated progress ring and checkmark
- Purple FAIL circular button that transitions to red with a minus mark
- Captions: “SUCCESS — every byte arrived” and “FAIL — the connection dropped”
- Source-preview panels for `index.html`, `app.css`, and `app.js`
- Keyboard focus styling and reduced-motion support

## Run
No dependencies or build step are needed.

Open `index.html` in a modern browser, or run:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Interactions
- Click the blue button to play a successful download state and download a small local demo text file.
- Click the purple button to simulate a dropped connection and show the red failure state.
- Click Replay success / Replay failure to replay the corresponding state.

## Source extraction note
The recording title is **Download Button** and the app branding is **TIDE**. The bottom of the video shows three source panels (`index.html`, `app.css`, `app.js`). Readable details include:
- SVG ring radius `47.6` on a 50-unit radius
- `.tide__track` / `.tide__arc` stroke width `3.7`
- `.tide__blade` stroke width `2.9` and round joins
- failure state changes the field/fill to red (shown as `#ef303a`) rather than changing the white ink
- JS comments about a single open polyline, four postures, twelve numbers, transfer-rate easing and an 800ms stall threshold

The recording is compressed and some code is too small to recover character-perfectly. The visible structure and readable values are represented in the source-preview and implementation; supporting code is reconstructed as a working demo. This is not a byte-for-byte extraction of the original project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
