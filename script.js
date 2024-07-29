document.addEventListener('DOMContentLoaded', function () {
  const icon = document.getElementById('share-icon');
  const urlText = document.getElementById('url-text');

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

  // Copy text to clipboard when the paragraph is clicked
  urlText.addEventListener('click', function () {
    const textToCopy = "https://netrot.pages.dev/"; // The custom text you want to copy
    navigator.clipboard.writeText(textToCopy)
  });

  // Open the share menu when the share icon is clicked
  icon.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({
        title: 'Netrot',
        text: 'A website exploring the collapse of the World Wide Web.',
        url: 'https://netrot.pages.dev/'
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(err => {
        console.error('Could not share:', err);
      });
    } else {
      alert('Web Share API is not supported in this browser.');
    }
  });
});