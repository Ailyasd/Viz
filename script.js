const navButtons = document.querySelectorAll(".promo__nav-btn");
const backButtons = document.querySelectorAll(".info-card__back-btn");
const panes = document.querySelectorAll(".info-card__pane");
const infoCard = document.getElementById("info-card-window");

const tabButtons = document.querySelectorAll(".contacts-tabs__btn");
const contactPanes = document.querySelectorAll(".contacts-pane");

function openPane(targetPaneId) {
    infoCard.classList.add("info-card--expanded");
    panes.forEach(pane => pane.classList.remove("info-card__pane--active"));
    const targetPane = document.getElementById(targetPaneId);
    if (targetPane) {
        setTimeout(() => {
            targetPane.classList.add("info-card__pane--active");
        }, 50);
    }
}

function closeInfoCard() {
    infoCard.classList.remove("info-card--expanded");
    panes.forEach(pane => pane.classList.remove("info-card__pane--active"));
    navButtons.forEach(btn => btn.classList.remove("promo__nav-btn--active"));
}

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");
        navButtons.forEach(btn => btn.classList.remove("promo__nav-btn--active"));
        button.classList.add("promo__nav-btn--active");
        openPane(`pane-${targetTab}`);
    });
});

backButtons.forEach(button => {
    button.addEventListener("click", closeInfoCard);
});

infoCard.addEventListener("click", (e) => {
    if (e.target === infoCard) {
        closeInfoCard();
    }
});

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetSubtab = button.getAttribute("data-subtab");
        const targetPane = document.getElementById(`subtab-${targetSubtab}`);
        tabButtons.forEach(btn => btn.classList.remove("contacts-tabs__btn--active"));
        contactPanes.forEach(pane => pane.classList.remove("contacts-pane--active"));
        button.classList.add("contacts-tabs__btn--active");
        if (targetPane) {
            targetPane.classList.add("contacts-pane--active");
        }
    });
});

const mapModal = document.getElementById("mapModal");
const mapIframe = document.getElementById("mapIframe");
const closeMapBtn = document.getElementById("closeMapBtn");
const locationBtns = document.querySelectorAll(".location-btn");

locationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const mapSrc = btn.getAttribute("data-map-src");
        if (mapSrc) {
            mapIframe.src = mapSrc;
            mapModal.classList.add("map-modal--active");
        }
    });
});

function closeMapModal() {
    mapModal.classList.remove("map-modal--active");
    setTimeout(() => {
        mapIframe.src = "";
    }, 300);
}

if (closeMapBtn) {
    closeMapBtn.addEventListener("click", closeMapModal);
}

if (mapModal) {
    mapModal.addEventListener("click", (e) => {
        if (e.target === mapModal) {
            closeMapModal();
        }
    });
}