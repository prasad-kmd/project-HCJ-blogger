document.addEventListener("DOMContentLoaded", () => {
  // --- Intersection Observer for Content Animation ---
  const content = document.querySelector(".content-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: stop observing after it's visible
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  if (content) {
    observer.observe(content);
  }

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
