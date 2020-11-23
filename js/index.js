// source: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // source: https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
        var href = this.getAttribute('href');
        var element = document.getElementById(href.replace("#", ""));
        var headerOffset = 140;
        var elementPosition = element.offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    });
});

// source: https://github.com/kevin-powell/navbar-change-on-scroll

const nav = document.querySelector(".nav");
const background = document.querySelector(".background");
const logo = document.querySelector(".logo");

const backgroundOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

const backgroundObserver = new IntersectionObserver(function(
  entries,
  backgroundObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        logo.classList.add('logo-black');
    } else {
        nav.classList.remove("nav-scrolled");
        logo.classList.remove('logo-black');
    }
  });
},
backgroundOptions);

backgroundObserver.observe(background);