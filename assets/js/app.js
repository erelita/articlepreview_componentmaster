/////// CHECK SCREEN SIZE IF MIN-WIDTH 768px
////--- IF MIN-WIDTH 768px
//----- CHECK IF #TOOLTIP-DESKTOP VISIBILITY = 'HIDDEN'
//----- IF HIDDEN, CHANGE TO VISIBLE
//----- ELSE, CHANGE TO HIDDEN
////--- IF LESS THAN 768px
//----- CHECK IF #TOOLTIP-MOBILE VISIBILITY = 'HIDDEN'
//----- IF HIDDEN, CHANGE TO VISIBLE
//----- ELSE, CHANGE TO HIDDEN

// const shareIcon = document.getElementById('share-icon');
// const mediaQuery = window.matchMedia('(min-width: 768px)');

// mediaQuery.addEventListener('change', () => {
//     if (mediaQuery.matches) {
//         const toolTipDesktop = document.getElementById('tooltip-desktop');
        
//         shareIcon.addEventListener('click', () => {
//             toolTipDesktop.classList.toggle('show');
//             toolTipDesktop.classList.toggle('hide')
//             shareIcon.classList.toggle('white-fill');
//             shareIcon.classList.toggle('grey-fill')
//             shareIcon.classList.toggle('icon-bg-clicked');
//             shareIcon.classList.toggle('icon-bg');
//             }
//         )
//     } else {
//         const toolTipMobile = document.getElementById('tooltip-mobile');
        
//         shareIcon.addEventListener('click', () => {
//             toolTipMobile.classList.toggle('show');
//             toolTipMobile.classList.toggle('hide');
//             shareIcon.classList.toggle('white-fill');
//             shareIcon.classList.toggle('grey-fill')
//             shareIcon.classList.toggle('icon-bg-clicked');
//             shareIcon.classList.toggle('icon-bg');
//             }
//         )
//     }
// })

///////

const shareIcon = document.getElementById('share-icon');
const mediaQuery = window.matchMedia('(min-width: 768px)');

showToolTip(mediaQuery);
mediaQuery.addEventListener('change', showToolTip);


function showToolTip (e) {
    if (mediaQuery.matches) {
        const toolTipDesktop = document.getElementById('tooltip-desktop');
        
        shareIcon.addEventListener('click', () => {
            toolTipDesktop.classList.toggle('show');
            toolTipDesktop.classList.toggle('hide');
            shareIcon.classList.toggle('white-fill');
            shareIcon.classList.toggle('grey-fill')
            shareIcon.classList.toggle('icon-bg-clicked');
            shareIcon.classList.toggle('icon-bg');
            }
        )
    } else {
        const toolTipMobile = document.getElementById('tooltip-mobile');
        
        shareIcon.addEventListener('click', () => {
            toolTipMobile.classList.toggle('show');
            toolTipMobile.classList.toggle('hide');
            shareIcon.classList.toggle('white-fill');
            shareIcon.classList.toggle('grey-fill')
            shareIcon.classList.toggle('icon-bg-clicked');
            shareIcon.classList.toggle('icon-bg');
            }
        )
    }
}

