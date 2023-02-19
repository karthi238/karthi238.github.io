var imageSources = ["./assets/images/home/image2.jpg", "./assets/images/home/image1.jpg", './assets/images/home/image3.jpg', './assets/images/home/image4.jpg', './assets/images/home/image5.jpg', './assets/images/home/image6.jpg', './assets/images/home/image7.jpg', './assets/images/home/image8.jpg']

var index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("home-image").src = imageSources[index];
    index++;
}, 3000);