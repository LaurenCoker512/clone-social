import CountUp from "countup.js";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";
import Chart from "chart.js";

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