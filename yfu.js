//BACKGROUND CHANGING FUNCTION

let images = [
     "city1.jpg",
     "city2.jpg",
     "city3.jpg",
     "city4.jpg",
    "city5.jpg"
];


let imgHeader = document.getElementById("img-header");

let i = 0;
setInterval(function () {
    imgHeader.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}, 5000);

//SCROLL ANIMATIONS


$(document).ready(function () {
    let controller = new ScrollMagic.Controller();

    let pinAboutYfu = new ScrollMagic.Scene({
            triggerElement: '#aboutYfu',
            triggerHook: 0,
            duration: '90%'
        })
        .setPin('#aboutYfu', {
            pushFollowers: false
        })
        .addTo(controller);





    let Scene1 = new ScrollMagic.Scene({
            triggerElement: '#icons'

        })
        .setClassToggle('#icons', 'fade-in')
        .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
            triggerElement: '#img1'
        })

        .setClassToggle('#img1', 'fade-left')
        .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
            triggerElement: '#text1'
        })

        .setClassToggle('#text1', 'fade-right')
        .addTo(controller);

let scene4 = new ScrollMagic.Scene({
            triggerElement: '#text2'
        })

        .setClassToggle('#text2', 'fade-left')
        .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
            triggerElement: '#img2'
        })

        .setClassToggle('#img2', 'fade-right')
        .addTo(controller);
});
let container = document.querySelector(".container");
let nav = document.querySelector(".nav");

container.addEventListener("click", shownav);
function shownav(){
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }

}






