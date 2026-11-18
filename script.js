
// =========================================
// SOKO.KE
// MAIN WEBSITE JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    // Open and close the mobile menu
    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", isOpen);

        });


        // Close the menu after selecting a navigation link
        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });


        // Close the menu when clicking outside it
        document.addEventListener("click", (event) => {

            const clickedInsideMenu = navigation.contains(event.target);
            const clickedMenuButton = menuButton.contains(event.target);

            if (!clickedInsideMenu && !clickedMenuButton) {

                navigation.classList.remove("active");

                menuButton.setAttribute("aria-expanded", "false");

            }

        });


        // Close the menu using the Escape key
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navigation.classList.remove("active");

                menuButton.setAttribute("aria-expanded", "false");

            }

        });

    }


    // AUTOMATIC FOOTER YEAR

    const yearElement = document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // SMOOTH SCROLLING FOR HOMEPAGE LINKS

    const pageLinks = document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
