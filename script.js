const API_BASE = "https://cataas.com";
const catImage = document.getElementById("catImage");
const loadBtn = document.getElementById("loadBtn");
const downloadBtn = document.getElementById("downloadBtn");
const catText = document.getElementById("catText");
const tagSelect = document.getElementById("tagSelect");
const catInfo = document.getElementById("catInfo");
const spinner = document.getElementById("loadingSpinner");

let currentImageUrl = "";
let currentCatData = {};

// Event Listener
loadBtn.addEventListener("click", loadNewCat);
downloadBtn.addEventListener("click", downloadImage);
catText.addEventListener("change", updateCatImage);
tagSelect.addEventListener("change", loadNewCat);

// Beim Laden die Tags und Anzahl laden
document.addEventListener("DOMContentLoaded", () => {
  loadTags();
  loadNewCat();
});

// Neue Katze laden
async function loadNewCat() {
  try {
    showSpinner(true);
    loadBtn.disabled = true;

    let url = `${API_BASE}/cat`;
    const text = catText.value.trim();
    const tag = tagSelect.value;

    // URL basierend auf Eingaben konstruieren
    if (tag) {
      url = `${API_BASE}/cat/${tag}`;
    }

    if (text) {
      url += `/says/${encodeURIComponent(text)}`;
    }

    // Bild mit zufälligem Query-Parameter laden (Cache umgehen)
    currentImageUrl = `${url}?v=${Date.now()}`;

    catImage.src = currentImageUrl;

    catImage.onload = () => {
      showSpinner(false);
      loadBtn.disabled = false;
      const tagInfo = tag ? ` (Tag: ${tag})` : "";
      const textInfo = text ? ` - sagt: "${text}"` : "";
      catInfo.textContent = `✨ Eine süße Katze wurde geladen!${tagInfo}${textInfo}`;
    };

    catImage.onerror = () => {
      showSpinner(false);
      loadBtn.disabled = false;
      catInfo.textContent =
        "❌ Fehler beim Laden der Katze. Bitte versuche es erneut.";
    };
  } catch (error) {
    showSpinner(false);
    loadBtn.disabled = false;
    catInfo.textContent = `❌ Fehler: ${error.message}`;
    console.error("Fehler beim Laden der Katze:", error);
  }
}

// Bild aktualisieren wenn Text sich ändert
function updateCatImage() {
  if (currentImageUrl) {
    loadNewCat();
  }
}

// Tags laden
async function loadTags() {
  try {
    const response = await fetch(`${API_BASE}/api/tags`);
    const tags = await response.json();

    tagSelect.innerHTML = '<option value="">- Alle Katzen -</option>';

    if (Array.isArray(tags) && tags.length > 0) {
      tags.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
        tagSelect.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Fehler beim Laden der Tags:", error);
  }
}

// Bild herunterladen
function downloadImage() {
  if (!currentImageUrl) {
    alert("Bitte lade zuerst ein Katzenbild!");
    return;
  }

  const link = document.createElement("a");
  link.href = currentImageUrl;
  link.download = `cataas_${Date.now()}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Spinner anzeigen/verbergen
function showSpinner(show) {
  if (show) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}
