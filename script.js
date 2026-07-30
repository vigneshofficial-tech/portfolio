// ===============================
// Portfolio JavaScript
// ===============================

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Fade Animation on Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .skill").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Resume Button
const resumeBtn = document.querySelector(".btn");

if (resumeBtn) {

    resumeBtn.addEventListener("click", function () {

        alert("Upload your Resume.pdf and update the resume link.");

    });

}

// Footer Year
const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Vignesh | DevOps Portfolio`;

}

console.log("Portfolio Loaded Successfully 🚀");
