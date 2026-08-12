# Quick Links

A tiny Chrome extension for people who visit the same handful of websites over and over. Save a shortcut with a name, URL, and short description — then open it in one click from your toolbar.

No accounts, no backend, no tracking. Everything is stored locally in your browser via `chrome.storage.local`.

## Demo

![How to add the extension](Tutorial/how%20to%20add%20extension.mp4)

## Screenshots

![Step 1](Tutorial/step%201.jpg)
![Step 2](Tutorial/step%202.jpg)

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
4. Click **Load unpacked** and select the `quick-links-extension` folder (not the whole repo).
5. Pin the extension from the puzzle-piece icon in your toolbar.

## Usage

1. Click the Quick Links icon.
2. Click **+ Add Shortcut**, fill in a name and URL (description is optional), and hit **Save**.
3. Click any saved shortcut to open it in a new tab.
4. Use the search box to filter your list as it grows.
5. Click **✕** next to a shortcut to remove it.

## Contributing

Issues and pull requests are welcome. Ideas: folders/tags, keyboard shortcuts, drag-to-reorder, import/export, sync via `chrome.storage.sync`, dark/light theme.

## License

MIT — see [LICENSE](quick-links-extension/LICENSE).
