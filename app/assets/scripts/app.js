// import jarallax from "jarallax";

//Slider

var slider = tns({
    container: ".large-hero__content",
    items: 1,
    slideBy: 1,
    autoplay: true,
    speed: 2000,
    controlsText: "",
    controlsContainer: ".large-hero__nav",
    autoplayText: ["", ""],
    autoplayButton: ".large-hero__start-btn",
    autoplayButtonOutput: false,
    navContainer: ".large-hero__dots"
});

//Parallax scrolling

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    },
    disableVideo: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    }
});