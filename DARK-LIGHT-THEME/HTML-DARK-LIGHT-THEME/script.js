const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
