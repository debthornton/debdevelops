

let scrollpos;
const Social = document.querySelector('#social');
const WorksContainer = document.querySelector('#works-container');
const WorksContainerTop = WorksContainer.offsetTop + 900;
const WorkDescriptionContainer = document.querySelector('#work-description-container');
const WorkDescriptionContainerTop = WorkDescriptionContainer.offsetTop;
const CloseButton = document.getElementById('close');
const Tetris = document.querySelector('#tetris-div');
const TetrisContainer = document.querySelector('#tetris-container');
const TetrisTop = Tetris.offsetTop + 700;

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= WorksContainerTop) {
        Social.classList.add('swipe-left');
    }
    else {
        Social.classList.remove('swipe-left');
    }

    if (scrollpos >= TetrisTop) {
        if (window.innerWidth >= 850) {
            TetrisContainer.classList.add('tetris-drop');
        }              
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 850) {
        TetrisContainer.classList.add('tetris-drop');
    }
    if (window.innerWidth <= 610) {
        WorkDescriptionContainer.classList.remove('swipe-up');
        WorkDescriptionContainer.classList.add('swipe-up-responsive');
    }
});


function swipeDown() {
    WorkDescriptionContainer.classList.remove('swipe-up');
    WorkDescriptionContainer.classList.remove('swipe-up-responsive');
    WorkDescriptionContainer.classList.add('swipe-down');
    CloseButton.classList.remove('close-appear');
    CloseButton.style.display = 'none';
    setTimeout(function() {
        WorkDescriptionContainer.style.display = 'none';  
    }, 800);
}

function swipeUp() {    
    WorkDescriptionContainer.style.display = 'initial';  
    WorkDescriptionContainer.classList.remove('swipe-down');
    WorkDescriptionContainer.classList.add('swipe-up');
    setTimeout(function() {
        CloseButton.style.display = 'initial';
        CloseButton.classList.remove('close-nondisplay');
        CloseButton.classList.add('close-appear');
    }, 1200);
}
