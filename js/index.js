const links = document.querySelectorAll(".link-item");
const radius = 230;
const total = links.length;

links.forEach((item, index) => {
  const angle = (index / total) * (Math.PI * 2) - Math.PI / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  item.style.transform = `translate(${x}px, ${y}px)`;
});

const toggle = document.getElementById("themeToggle");
const modeText = document.getElementById("modeText");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    modeText.textContent = "Light Mode";
  } else {
    modeText.textContent = "Dark Mode";
  }
});
