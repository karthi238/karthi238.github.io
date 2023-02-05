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