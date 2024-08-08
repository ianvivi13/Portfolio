// Updates bottom toolbar position based on viewport size
function updateBottomDivPosition() {
    var bottomDiv = document.querySelector('#bottom-toolbar');
    var viewportHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (documentHeight <= viewportHeight) {
        // If document height is less than or equal to viewport height,
        // set position to fixed at the bottom
        bottomDiv.style.position = 'fixed';
        bottomDiv.style.bottom = '0';
    } else {
        // If document height is greater than viewport height,
        // reset position to static
        bottomDiv.style.position = 'static';
        bottomDiv.style.bottom = 'auto';
    }
}

// Update position when viewport is resized
window.addEventListener('resize', updateBottomDivPosition);
