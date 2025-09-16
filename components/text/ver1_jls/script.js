document.addEventListener("DOMContentLoaded", () => {
  const words = ["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"];
  const duration = 3000;
  const dynamicTextElement = document.querySelector(".dynamic-text");
  let currentIndex = 0;

  function updateText() {
    // Add the exiting animation class
    dynamicTextElement.classList.add("exiting");

    // Wait for the exit animation to complete
    setTimeout(() => {
      // Update the text content
      currentIndex = (currentIndex + 1) % words.length;
      dynamicTextElement.textContent = words[currentIndex];

      // Remove exiting class and add entering class
      dynamicTextElement.classList.remove("exiting");
      dynamicTextElement.classList.add("entering");

      // Clean up the entering class after the animation is done
      setTimeout(() => {
        dynamicTextElement.classList.remove("entering");
      }, 500); // Duration of the enter animation
    }, 500); // Duration of the exit animation
  }

  // Set the initial word
  dynamicTextElement.textContent = words[currentIndex];

  // Start the interval
  setInterval(updateText, duration);

  // --- Dummy Theme Switcher Logic ---
  const themeSwitcher = document.getElementById("theme-switcher");
  const docElement = document.documentElement;

  // Set initial theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  docElement.setAttribute("data-theme", savedTheme);

  themeSwitcher.addEventListener("click", () => {
    const currentTheme = docElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    docElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
