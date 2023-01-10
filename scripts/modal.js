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