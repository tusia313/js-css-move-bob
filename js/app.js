const bob = document.querySelector('.bob')
const eyes = document.querySelector('.eyes-container')

let left = 50

function moveRight() {
    left += 50
    bob.style.left = left +'px'
    eyes.style.transform = 'rotate(0)'
    eyes.style.top = '0'
}

function moveLeft() {
    left -= 50
    bob.style.left = left +'px'
    eyes.style.transform = 'rotateY(180deg)'
}

function moveBob(e) {
    const keyArrow = e.key
    console.log(keyArrow)

        if (keyArrow === 'ArrowRight') {
            moveRight()
        }
        if (keyArrow === 'ArrowLeft') {
            moveLeft()
        }
}

document.addEventListener('keydown', moveBob)





