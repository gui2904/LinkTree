const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    // prevent button from navigating away (if it was a link or form)
    e.preventDefault();
    
    // Get the link attribute from the clicked button
    const link = this.getAttribute('link');

    try {
        // Open the link in a new tab
        window.open(link, '_blank');  // '_blank' ensures it opens in a new tab
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));
