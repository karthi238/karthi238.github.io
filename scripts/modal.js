function openModal() {
    let modal = document.getElementById("nav-modal");
    let toggler = document.getElementById('mobile-nav');

    modal.style.display = 'block';
    toggler.style.display = 'none';
}

function closeModal() {
    var modal = document.getElementById("nav-modal");
    let toggler = document.getElementById('mobile-nav')

    modal.style.display = 'none';
    toggler.style.display = 'block';
}

function openSocialLinks(key) {
    if (key === 'youtube') window.open('https://www.youtube.com/@homeadmire/videos', '_blank')
    else if (key === 'instagram') window.open('https://www.instagram.com/_home_admire/', '_blank')
}

function toggleImagesAndVideos(key) {
    let videosHead = document.getElementById("videos-head");
    let imagesHead = document.getElementById('images-head');
    let videosContent = document.getElementById("videos");
    let imagesContent = document.getElementById('images');
    if (key === 'videos') {
        imagesHead.style.fontSize = '25px';
        imagesHead.style.fontWeight = 'normal';
        videosHead.style.fontSize = '30px';
        videosHead.style.fontWeight = 'bold';

        imagesContent.style.display = 'none';
        videosContent.style.display = 'flex';
    } else {
        videosHead.style.fontSize = '25px';
        videosHead.style.fontWeight = 'normal';
        imagesHead.style.fontSize = '30px';
        imagesHead.style.fontWeight = 'bold';

        videosContent.style.display = 'none';
        imagesContent.style.display = 'flex';
    }
}