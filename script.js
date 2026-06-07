const navButtons = document.querySelectorAll(".promo__nav-btn");
const backButtons = document.querySelectorAll(".info-card__back-btn");
const panes = document.querySelectorAll(".info-card__pane");
const infoCardWindow = document.getElementById("info-card-window");

const tabButtons = document.querySelectorAll(".contacts-tabs__btn");
const contactPanes = document.querySelectorAll(".contacts-pane");

function switchPane(targetPaneId, expandCard) {
  const promoSection = document.querySelector(".promo");
  const logoWrapper = document.querySelector(".promo__logo-wrapper");

  panes.forEach((pane) => pane.classList.remove("info-card__pane--active"));

  if (expandCard) {
    infoCardWindow.classList.add("info-card--expanded");
    
    if (promoSection && window.innerWidth < 768) {
      promoSection.classList.add("is-open");
    }
  } else {
    infoCardWindow.classList.remove("info-card--expanded");
    
    if (promoSection) {
      promoSection.classList.remove("is-open");
    }
  }

  setTimeout(() => {
    const targetPane = document.getElementById(targetPaneId);
    if (targetPane) targetPane.classList.add("info-card__pane--active");
  }, 150);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    navButtons.forEach((btn) => btn.classList.remove("promo__nav-btn--active"));
    button.classList.add("promo__nav-btn--active");

    switchPane(`pane-${targetTab}`, true);
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("promo__nav-btn--active"));
    switchPane("pane-default", false);
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSubtab = button.getAttribute("data-subtab");
    const targetPane = document.getElementById(`subtab-${targetSubtab}`);

    tabButtons.forEach((btn) =>
      btn.classList.remove("contacts-tabs__btn--active")
    );
    contactPanes.forEach((pane) => {
      pane.classList.remove("contacts-pane--active");
    });

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

locationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mapSrc = btn.getAttribute("data-map-src");
    if (mapSrc) {
      mapIframe.src = mapSrc;
      mapModal.classList.add("map-modal--active");
    }
  });
});

function closeModal() {
  mapModal.classList.remove("map-modal--active");
  setTimeout(() => {
    mapIframe.src = ""; 
  }, 300);
}

if (closeMapBtn) {
  closeMapBtn.addEventListener("click", closeModal);
}

if (mapModal) {
  mapModal.addEventListener("click", (e) => {
    if (e.target === mapModal) {
      closeModal();
    }
  });
}