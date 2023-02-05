var imageSources = ["./assets/images/home/image4.jpg", "./assets/images/home/image5.jpg"]

var index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("home-image").src = imageSources[index];
    index++;
}, 3000);