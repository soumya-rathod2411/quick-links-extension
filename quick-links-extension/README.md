# Quick Links

A tiny Chrome extension for people who visit the same handful of websites over and over. Save a shortcut with a name, URL, and short description — then open it in one click from your toolbar.

No accounts, no backend, no tracking. Everything is stored locally in your browser via `chrome.storage.local`.

![Quick Links screenshot](screenshot.png)

## Features

- Add a shortcut with a name, URL, and optional description
- One click to open any saved shortcut in a new tab
- Instant search/filter across name, description, and URL
- Delete shortcuts you no longer need
- All data stays on your device — nothing is sent anywhere

## Installation (from source)

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select this folder.
5. Pin the extension from the puzzle-piece icon in your toolbar.

*(Not yet on the Chrome Web Store — contributions toward publishing are welcome!)*

## Usage

1. Click the Quick Links icon.
2. Click **+ Add Shortcut**, fill in a name and URL (description is optional), and hit **Save**.
3. Click any saved shortcut to open it in a new tab.
4. Use the search box to filter your list as it grows.
5. Click **✕** next to a shortcut to remove it.

## Project structure

```
quick-links-extension/
├── manifest.json     # Extension config (Manifest V3)
├── popup.html         # Popup UI markup
├── popup.css          # Popup styling
├── popup.js           # Storage, rendering, search, add/delete logic
└── icons/              # Toolbar icons
```

## Contributing

Issues and pull requests are welcome — this is meant to be a small, easy-to-hack-on project. Some ideas for contributions:

- Folders/categories or tags for organizing large lists
- Keyboard shortcuts to open a saved link
- Drag-to-reorder
- Import/export shortcuts as JSON
- Sync via `chrome.storage.sync` instead of `local`
- Dark/light theme toggle

## License

MIT — see [LICENSE](LICENSE).
