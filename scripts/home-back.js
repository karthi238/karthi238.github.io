var imageSources = ["./assets/images/home/image1.jpg", "./assets/images/home/image2.png", './assets/images/home/image3.png']

var index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("home-image").src = imageSources[index];
    index++;
}, 3000);