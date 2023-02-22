document.addEventListener('DOMContentLoaded', function() {

    const aboutSection = document.querySelector('.desc__sinopse')
    const aboutHeight = aboutSection.clientHeight;

    const descSection = document.querySelector('.desc')
    const descHeight = descSection.clientHeight;


    window.addEventListener('scroll', function() {
        const position = window.scrollY;

        if (position <= aboutHeight) {
            hiddenHeaderElements();

        } else {
            showHeaderElements();
        }

        if (position <= descHeight) {
            hiddenOpacity()
        } else {
            showOpacity()
        }
    })

})

function showOpacity() {
    const background = document.querySelector('.app__background')
    background.classList.add('opacity')
}

function hiddenOpacity() {
    const background = document.querySelector('.app__background')
    background.classList.remove('opacity')
}

function hiddenHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}