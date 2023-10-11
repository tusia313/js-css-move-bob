// const movingBob = document.getElementById('bob-container')
const dotElements = document.querySelectorAll('.dot')

console.log(dotElements)

function changeClass(e) {
    dotElements.classList.remove('dot-right', 'dot-left')
    const keyArrow = e.key
    if (keyArrow === 'ArrowLeft') {
        dotElements.classList.add('dot-left')
    }
    if (keyArrow === 'ArrowRight') {
        dotElements.classList.add('dot-right')
    }
}

dotElements.forEach(dotElement =>
    dotElement.addEventListener('keydown', changeClass)
    )



