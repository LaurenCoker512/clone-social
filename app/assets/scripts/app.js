import CountUp from "countup.js";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";
import Chart from "chart.js";
import $ from "jquery";

window.onscroll = function() {
    stickyHeader();
    checkBtn();
};

window.onresize = function() {
    removeStickyHeader();
    stickyHeader();
};

//Smooth scrolling

var returnBtn = document.querySelector(".return-btn");
var largeHero = document.querySelector(".large-hero");
var largeHeroBottom = largeHero.offsetTop;

function checkBtn() {
    if (window.pageYOffset >= largeHeroBottom) {
        returnBtn.classList.add("return-btn--revealed");
    } else {
        returnBtn.classList.remove("return-btn--revealed");
    }
}

$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800); // The number here represents the speed of the scroll in milliseconds
          target.focus(); // Setting focus
          if (target.is(":focus")){ // Checking if the target was focused
            return false;
          } else {
            target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            target.focus(); // Setting focus
          };
          return false;
        }
      }
    });
  });

//Sticky Header on Scroll

var header = document.querySelector(".top-wrapper");
var headerLogo = document.querySelector(".header-logo");
// var sticky = header.offsetTop;
var sticky = 34;

function stickyHeader() {
    if (window.innerWidth >= 1000) {
        if (window.pageYOffset >= sticky) {
            header.classList.add("header--sticky");
            headerLogo.classList.add("header-logo--sticky");
        } else if (window.innerWidth <= 1000 && header.classList.contains("header--sticky")) {
            header.classList.remove("header--sticky");
            headerLogo.classList.remove("header-logo--sticky");
        }
        else {
            header.classList.remove("header--sticky");
            headerLogo.classList.remove("header-logo--sticky");
        }
    }
}

function removeStickyHeader() {
    if (window.innerWidth < 1000) {
        header.classList.remove("header--sticky");
        headerLogo.classList.remove("header-logo--sticky");
    }
}

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

//CountUp

var itemMembers = document.getElementById("item-members"),
    countMembers = 1254,
    itemRallies = document.getElementById("item-rallies"),
    countRallies = 147,
    itemCases = document.getElementById("item-cases"),
    countCases = 462,
    itemFunds = document.getElementById("item-funds"),
    countFunds = 8700,
    counterArea = document.querySelector(".progress");

var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
};
        
function createCounter(item, count) {
    var countUp = new CountUp(item, 0, count, 0, 2, options);
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}
        
new Waypoint({
    element: counterArea,
    handler: function() {
        createCounter(itemMembers, countMembers);
        createCounter(itemRallies, countRallies);
        createCounter(itemCases, countCases);
        createCounter(itemFunds, countFunds);
    },
    offset: "70%"
});

//News Slider

var sliderNews = tns({
    container: ".news__content",
    items: 1,
    autoplay: true,
    speed: 2000,
    nav: false,
    controlsText: ["", ""],
    controlsContainer: ".news__btns",
    autoplayText: ["", ""],
    autoplayButton: ".news__nav",
    rewind: true,
    fixedWidth: 292,
    responsive: {
        760: {
            items: 2
        },
        1000: {
            items: 3
        },
        1424: {
            items: 4,
            fixedWidth: 268
        }
    }
});

//Tweet Slider

var tweetSlider = tns({
    container: ".tweets__slider",
    mode: "gallery",
    items: 1,
    slideBy: 1,
    autoplay: true,
    speed: 1200,
    controlsText: "",
    controlsContainer: ".tweets__nav",
    autoplayText: ["", ""],
    autoplayButton: ".large-hero__start-btn",
    autoplayButtonOutput: false,
    nav: false
});

//Donut Chart

var idAnimalChart = document.getElementById("funds__animals");
var idRightsChart = document.getElementById("funds__rights");
var idReformsChart = document.getElementById("funds__reforms");
var idWaterChart = document.getElementById("funds__water");

var animalChart = new Chart(idAnimalChart, {
    type: "doughnut",
    data: {
        datasets: [
            {
                backgroundColor: ["#b83d46", "#ffffff"],
                data: [82, 18]
            }
        ]
    },
    options: {
        title: {
            display: false
        },
        cutoutPercentage: 80
    }
});

var rightsChart = new Chart(idRightsChart, {
    type: "doughnut",
    data: {
        datasets: [
            {
                backgroundColor: ["#585a73", "#ffffff"],
                data: [76, 24]
            }
        ]
    },
    options: {
        title: {
            display: false
        },
        cutoutPercentage: 80
    }
});

var reformsChart = new Chart(idReformsChart, {
    type: "doughnut",
    data: {
        datasets: [
            {
                backgroundColor: ["#435774", "#ffffff"],
                data: [89, 11]
            }
        ]
    },
    options: {
        title: {
            display: false
        },
        cutoutPercentage: 80
    }
});

var waterChart = new Chart(idWaterChart, {
    type: "doughnut",
    data: {
        datasets: [
            {
                backgroundColor: ["#3c576e", "#ffffff"],
                data: [66, 34]
            }
        ]
    },
    options: {
        title: {
            display: false
        },
        cutoutPercentage: 80
    }
});

