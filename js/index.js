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