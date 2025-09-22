const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal (Cancel button)
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on overlay click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close modal on ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
