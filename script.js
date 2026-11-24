document.documentElement.classList.add("js-enabled");

const galleryImages = [
  "WhatsApp Image 2026-11-02 at 5.31.08 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.08 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.08 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.09 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.09 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.09 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.10 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.10 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.10 PM (3).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.10 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.11 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.11 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.11 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.12 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.12 PM (3).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.12 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.13 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.14 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.15 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.15 PM (3).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.15 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.16 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.17 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.17 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.17 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.18 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.18 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.19 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.19 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.20 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.20 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.21 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.21 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.21 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.22 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.22 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.22 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.23 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.23 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.24 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.24 PM (2).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.24 PM.jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.25 PM (1).jpeg",
  "WhatsApp Image 2026-11-02 at 5.31.25 PM.jpeg",
  "photos1.jpeg",
  "photos2.jpeg",
  "photos3.jpeg",
  "photos4.jpeg",
  "photos5.jpeg",
  "photos6.jpeg",
  "photos7.jpeg",
  "photos8.jpeg",
  "photos9.jpeg"
];

const imageDirectory = "image/WhatsApp Unknown 2026-11-03 at 2.09.09 PM/";
const gallery = document.querySelector("[data-photo-gallery]");
const lightbox = document.querySelector(".lightbox");
let activePhoto = 0;

function photoUrl(index) {
  return imageDirectory + encodeURIComponent(galleryImages[index]);
}

if (gallery) {
  galleryImages.forEach((name, index) => {
    const button = document.createElement("button");
    const image = document.createElement("img");
    button.className = "gallery-photo";
    button.type = "button";
    button.setAttribute("aria-label", `Open homestay photo ${index + 1} of ${galleryImages.length}`);
    image.src = photoUrl(index);
    image.alt = `The Lillys Homestay, Alleppey — stay photo ${index + 1}`;
    image.loading = "lazy";
    button.append(image);
    button.addEventListener("click", () => openPhoto(index));
    gallery.append(button);
  });
}

function openPhoto(index) {
  if (!lightbox) return;
  activePhoto = (index + galleryImages.length) % galleryImages.length;
  const image = lightbox.querySelector(".lightbox-image");
  image.src = photoUrl(activePhoto);
  image.alt = `The Lillys Homestay, Alleppey — photo ${activePhoto + 1}`;
  lightbox.querySelector(".lightbox-count").textContent = `${activePhoto + 1} / ${galleryImages.length}`;
  if (!lightbox.open) lightbox.showModal();
}

if (lightbox) {
  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => openPhoto(activePhoto - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => openPhoto(activePhoto + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") lightbox.close();
    if (event.key === "ArrowLeft") openPhoto(activePhoto - 1);
    if (event.key === "ArrowRight") openPhoto(activePhoto + 1);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    navigation.classList.toggle("is-open", !isOpen);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const bookingModal = document.querySelector("#book-modal");
if (bookingModal) {
  document.querySelectorAll("[data-open-booking]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (!bookingModal.open) bookingModal.showModal();
    });
  });

  const closeBtn = bookingModal.querySelector(".booking-modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => bookingModal.close());
  }
  bookingModal.addEventListener("click", (event) => {
    if (event.target === bookingModal) bookingModal.close();
  });
  bookingModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") bookingModal.close();
  });
}

const certModal = document.querySelector("#cert-modal");
if (certModal) {
  document.querySelectorAll("[data-view-cert]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!certModal.open) certModal.showModal();
    });
  });
  const certCloseBtn = certModal.querySelector(".cert-modal-close");
  if (certCloseBtn) {
    certCloseBtn.addEventListener("click", () => certModal.close());
  }
  certModal.addEventListener("click", (event) => {
    if (event.target === certModal) certModal.close();
  });
  certModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") certModal.close();
  });
}

// Scroll animation: ONLY for selected sections (intro, comfort, preview, and contact)
const animatedSections = [
  document.querySelector(".intro"),
  document.querySelector(".comfort-section"),
  document.querySelector(".preview-section"),
  document.querySelector(".contact-section")
].filter(Boolean);

if (animatedSections.length > 0) {
  const checkSectionScroll = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerPoint = windowHeight * 0.85;

    animatedSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= triggerPoint && rect.bottom >= 0) {
        if (!section.classList.contains("is-visible")) {
          section.classList.add("is-visible");
        }
      } else if (rect.top > triggerPoint) {
        // Scrolled back up above the section — reset so it emerges again when scrolling downwards
        if (section.classList.contains("is-visible")) {
          section.classList.remove("is-visible");
        }
      }
    });
  };

  window.addEventListener("scroll", checkSectionScroll, { passive: true });
  window.addEventListener("resize", checkSectionScroll, { passive: true });
  checkSectionScroll();
}
