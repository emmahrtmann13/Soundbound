const fade = document.getElementById("fade");
const video = document.querySelector("video");

// Fade-In beim Laden
window.addEventListener("load", () => {
  setTimeout(() => {
    fade.style.opacity = "0";
  }, 100); // kleiner Delay für Smoothness
});

// Sanfter Fade beim Verlassen
window.addEventListener("beforeunload", () => {
  fade.style.opacity = "1";
});

// Crossfade-Funktion für Unterseiten
function crossfadeAndRedirect(targetURL) {
  fade.style.opacity = "1";
  setTimeout(() => {
    window.location.href = targetURL;
  }, 1500); // muss identisch sein mit CSS-Transition
}
