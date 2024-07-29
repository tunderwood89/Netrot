document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('share-icon');

    function updateIcon() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            icon.src = 'share_white.svg';
        } else {
            icon.src = 'share_black.svg';
        }
    }

    // Initial check
    updateIcon();

    // Listen for changes in the color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateIcon);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateIcon);
});
    // Copy text to clipboard when the paragraph is clicked
    urlText.addEventListener('click', function () {
        const textToCopy = "https://example.com"; // The custom text you want to copy
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('URL copied to clipboard: ' + textToCopy);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});