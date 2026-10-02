 // =========================================
// LIVING PULSE
// Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------
    // MOBILE MENU
    // -----------------------------------------

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
        });


        // Close menu after clicking a navigation link
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    // -----------------------------------------
    // SMOOTH SCROLL
    // -----------------------------------------

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // -----------------------------------------
    // HEADER EFFECT ON SCROLL
    // -----------------------------------------

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    // -----------------------------------------
    // CURRENT YEAR
    // -----------------------------------------

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});