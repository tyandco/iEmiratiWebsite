// toggle.js

document.addEventListener("DOMContentLoaded", function () {

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Function to update theme based on system preference
  function updateTheme(e) {
    if (e.matches) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }

  // Initial check
  updateTheme(mediaQuery);

  // Listen for changes to system preference
  mediaQuery.addEventListener("change", updateTheme);
});