document.addEventListener("DOMContentLoaded", () => {
    // --- Global Theme Switcher ---
    const themeSwitcher = document.getElementById("theme-switcher");
    const footerThemeToggle = document.getElementById("footer-checkbox");
    const docElement = document.documentElement;

    function setTheme(theme) {
        if (theme === "dark") {
            docElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            if (footerThemeToggle) footerThemeToggle.checked = true;
        } else {
            docElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            if (footerThemeToggle) footerThemeToggle.checked = false;
        }
        // Dispatch a custom event to notify other components of the theme change
        document.dispatchEvent(
            new CustomEvent("themeChanged", { detail: { theme } })
        );
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener("click", () => {
            const currentTheme = docElement.classList.contains("dark")
                ? "dark"
                : "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
        });
    }

    if (footerThemeToggle) {
        footerThemeToggle.addEventListener("change", (e) => {
            setTheme(e.target.checked ? "dark" : "light");
        });
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // --- Loader ---
    const loaderContainer = document.querySelector(".loader-container");
    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loaderContainer) {
                loaderContainer.classList.add("hidden");
                setTimeout(() => {
                    loaderContainer.style.display = "none";
                }, 500);
            }
        }, 1000);
    });

    // --- Navbar ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("menu-open");
        });
    }

    // --- Hero Text ---
    const words = ["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"];
    const duration = 3000;
    const dynamicTextElement = document.querySelector(".dynamic-text");
    if (dynamicTextElement) {
        let currentIndex = 0;
        function updateText() {
            dynamicTextElement.classList.add("exiting");
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                dynamicTextElement.textContent = words[currentIndex];
                dynamicTextElement.classList.remove("exiting");
                dynamicTextElement.classList.add("entering");
                setTimeout(() => {
                    dynamicTextElement.classList.remove("entering");
                }, 500);
            }, 500);
        }
        dynamicTextElement.textContent = words[currentIndex];
        setInterval(updateText, duration);
    }

    // --- Hero Background ---
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const heroBackground = document.querySelector(".hero-background");
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });

    // --- Footer (Vanta.js) ---
    function setVantaTheme(isDark) {
        if (typeof VANTA !== "undefined") {
            const themeColor = isDark ? 0x2c84e8 : 0x2c84e8;
            const backgroundColor = isDark ? 0x121212 : 0xf8f9fa;
            VANTA.RINGS({
                el: "#vanta-footer",
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                backgroundColor: backgroundColor,
                color: themeColor,
                backgroundAlpha: 0.2,
            });
        }
    }
    setVantaTheme(docElement.classList.contains("dark"));
    document.addEventListener("themeChanged", (e) => {
        setVantaTheme(e.detail.theme === "dark");
    });

    // --- Scroll Progress ---
    const scrollProgressContainer = document.querySelector(
        ".scroll-progress-container"
    );
    const scrollProgressCircle = document.querySelector(
        ".scroll-progress-circle-fill"
    );
    const scrollArrow = document.querySelector(".scroll-arrow");
    if (scrollProgressContainer) {
        const radius = 20;
        const circumference = 2 * Math.PI * radius;
        scrollProgressCircle.style.strokeDasharray = circumference;
        scrollProgressCircle.style.strokeDashoffset = circumference;
        function updateScrollProgress() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollPercentage = scrollTop / scrollHeight;
            const offset = circumference - scrollPercentage * circumference;
            scrollProgressCircle.style.strokeDashoffset = offset;
            if (scrollTop > 300) {
                scrollProgressContainer.classList.add("visible");
            } else {
                scrollProgressContainer.classList.remove("visible");
            }
            if (scrollPercentage > 0.9) {
                scrollArrow.style.transform = "rotate(270deg)";
            } else {
                scrollArrow.style.transform = "rotate(90deg)";
            }
        }
        scrollProgressContainer.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress();
    }

    // --- Floating Dock ---
    const dockItems = [
        { title: "Home", icon: '<i class="fas fa-home"></i>', href: "#" },
        { title: "Products", icon: '<i class="fas fa-box"></i>', href: "#" },
        {
            title: "Components",
            icon: '<i class="fas fa-puzzle-piece"></i>',
            href: "#",
        },
        { title: "Settings", icon: '<i class="fas fa-cog"></i>', href: "#" },
        {
            title: "Aceternity UI",
            icon: '<img src="https://assets.aceternity.com/logo-dark.png" class="icon-img" alt="Aceternity Logo">',
            href: "#",
        },
        { title: "GitHub", icon: '<i class="fab fa-github"></i>', href: "#" },
    ];
    const desktopDock = document.getElementById("desktopDock");
    const mobileItems = document.getElementById("mobileItems");
    const mobileToggle = document.getElementById("mobileToggle");
    if (desktopDock) {
        function createDockItem(item) {
            const itemEl = document.createElement("a");
            itemEl.href = item.href;
            itemEl.className = "dock-item";
            itemEl.innerHTML = `<div class="item-icon">${item.icon}</div><span class="item-tooltip">${item.title}</span>`;
            return itemEl;
        }
        dockItems.forEach((item) => {
            desktopDock.appendChild(createDockItem(item));
            if (mobileItems) mobileItems.appendChild(createDockItem(item));
        });
        const items = desktopDock.querySelectorAll(".dock-item");
        desktopDock.addEventListener("mousemove", function (e) {
            const mouseX = e.pageX;
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.left + rect.width / 2;
                const distance = Math.abs(mouseX - itemCenter);
                let scale = 1;
                if (distance < 100) {
                    scale = 1.4 - (distance / 100) * 0.4;
                }
                item.style.transform = `scale(${scale})`;
                const icon = item.querySelector(".item-icon");
                let iconScale = 1;
                if (distance < 100) {
                    iconScale = 1.8 - (distance / 100) * 0.8;
                }
                icon.style.transform = `scale(${iconScale})`;
            });
        });
        desktopDock.addEventListener("mouseleave", function () {
            items.forEach((item) => {
                item.style.transform = "scale(1)";
                const icon = item.querySelector(".item-icon");
                icon.style.transform = "scale(1)";
            });
        });
    }
    if (mobileToggle) {
        mobileToggle.addEventListener("click", function () {
            mobileItems.classList.toggle("active");
            const icon = mobileToggle.querySelector("i");
            const items = mobileItems.querySelectorAll(".dock-item");
            const radius = 100; // The radius of the circle
            const angleIncrement = Math.PI / (items.length - 1); // Distribute items in a semi-circle

            if (mobileItems.classList.contains("active")) {
                icon.className = "fas fa-times";
                items.forEach((item, index) => {
                    const angle = -angleIncrement * index;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    item.style.transform = `translate(${x}px, ${y}px)`;
                });
            } else {
                icon.className = "fas fa-bars";
                items.forEach((item) => {
                    item.style.transform = "translate(0, 0)";
                });
            }
        });
    }
});
