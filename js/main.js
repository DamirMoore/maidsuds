function closeStickyEstimate() {
    var sticky = document.querySelector('.free-estimate-sticky');
    var closeButton = document.querySelector('.sticky-free-estimate-close');

    sticky.classList.remove('make-sticky');
    closeButton.classList.add('hide-close-button');
    console.log('sticky discovery closed');
}