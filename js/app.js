// const movingBob = document.getElementById('bob-container')
const dotElements = document.querySelectorAll('.dot')

console.log(dotElements)

function changeClass(e) {
    dotElements.classList.remove('right', 'left')
    const keyArrow = e.key
    if (keyArrow === 'ArrowLeft') {
        dotElements.classList.add('left')
    }
    if (keyArrow === 'ArrowRight') {
        dotElements.classList.add('right')
    }
}

dotElements.forEach(dotElement =>
    dotElement.addEventListener('keydown', changeClass)
    )



