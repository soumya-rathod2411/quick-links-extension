const linkList = document.getElementById("linkList");
const searchBox = document.getElementById("searchBox");
const addBtn = document.getElementById("addBtn");
const formPanel = document.getElementById("formPanel");
const nameInput = document.getElementById("nameInput");
const urlInput = document.getElementById("urlInput");
const descInput = document.getElementById("descInput");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

let shortcuts = [];

function normalizeUrl(url) {
  if (!/^https?:\/\//i.test(url)) {
    return "https://" + url;
  }
  return url;
}

function loadShortcuts(callback) {
  chrome.storage.local.get({ shortcuts: [] }, (data) => {
    shortcuts = data.shortcuts;
    if (callback) callback();
  });
}

function saveShortcuts(callback) {
  chrome.storage.local.set({ shortcuts }, callback);
}

function render(filter = "") {
  linkList.innerHTML = "";
  const q = filter.trim().toLowerCase();

  const filtered = shortcuts.filter((s) => {
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.url.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = shortcuts.length === 0
      ? "No shortcuts yet. Add your first one below."
      : "No matches found.";
    linkList.appendChild(empty);
    return;
  }

  filtered.forEach((s) => {
    const item = document.createElement("div");
    item.className = "link-item";

    const info = document.createElement("div");
    info.className = "link-info";

    const name = document.createElement("div");
    name.className = "link-name";
    name.textContent = s.name;

    const desc = document.createElement("div");
    desc.className = "link-desc";
    desc.textContent = s.description || s.url;

    info.appendChild(name);
    info.appendChild(desc);

    const actions = document.createElement("div");
    actions.className = "link-actions";

    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn";
    delBtn.textContent = "✕";
    delBtn.title = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      shortcuts = shortcuts.filter((x) => x.id !== s.id);
      saveShortcuts(() => render(searchBox.value));
    });

    actions.appendChild(delBtn);

    item.appendChild(info);
    item.appendChild(actions);

    item.addEventListener("click", () => {
      chrome.tabs.create({ url: s.url });
    });

    linkList.appendChild(item);
  });
}

addBtn.addEventListener("click", () => {
  formPanel.classList.remove("hidden");
  nameInput.focus();
});

cancelBtn.addEventListener("click", () => {
  formPanel.classList.add("hidden");
  nameInput.value = "";
  urlInput.value = "";
  descInput.value = "";
});

saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const description = descInput.value.trim();

  if (!name || !url) {
    alert("Please enter at least a name and a URL.");
    return;
  }

  shortcuts.push({
    id: Date.now().toString(),
    name,
    url: normalizeUrl(url),
    description,
  });

  saveShortcuts(() => {
    render(searchBox.value);
    nameInput.value = "";
    urlInput.value = "";
    descInput.value = "";
    formPanel.classList.add("hidden");
  });
});

searchBox.addEventListener("input", () => {
  render(searchBox.value);
});

loadShortcuts(() => render());
