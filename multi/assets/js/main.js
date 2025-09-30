
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.transition = "background 2s";
  setInterval(() => {
    document.body.style.background = `hsl(${Math.random()*360}, 50%, 90%)`;
  }, 5000);
});
