const videosList = [
    { id: 1, link: 'https://www.youtube.com/embed/nJ0piToPSSM' },
    { id: 2, link: 'https://www.youtube.com/embed/t3FYQ9RlzH4' },
    { id: 3, link: 'https://www.youtube.com/embed/wJCrNae0YTk' },
    { id: 4, link: 'https://www.youtube.com/embed/9VzQSOHNLak' },
    { id: 5, link: 'https://www.youtube.com/embed/W5zWTH9no-8' }
]

function openvideo(index) {
    let modal = document.getElementById("gallery-modal");
    let videoframe = document.getElementById('video-iframe');

    modal.style.display = 'flex';

    const videoid = videosList?.find(elem => elem.id === index)
    videoframe.src = videoid?.link
}

function closevideo() {
    var modal = document.getElementById("gallery-modal");

    modal.style.display = 'none';
}