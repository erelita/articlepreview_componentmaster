const shareIcon = document.querySelector('.share-icon');
const toolTip = document.querySelector('.tooltip');
        
    shareIcon.addEventListener('click', () => { // Adds event when .share-icon is cliked
        toolTip.classList.toggle('hide'); // Show/hide .tooltip
        shareIcon.classList.toggle('fill'); // Changes color of the share icon SVG
        shareIcon.classList.toggle('icon-bg'); //Changes background color of the .share-icon
        }
    )
