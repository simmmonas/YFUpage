let images = [
     "city1.jpg",
     "city2.jpg",
     "city3.jpg",
     "city4.jpg",
    "city5.jpg"
];

let imgHeader = document.getElementById("img-header");

let i = 0;
setInterval(function() {
      imgHeader.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);
