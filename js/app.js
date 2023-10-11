const bob = document.querySelector('.bob')
const eyes = document.querySelectorAll('.eyes-container')

let left = 50

function moveRight() {
    left += 50
    bob.style.left = left +'px'
    console.log(left)
}

function moveLeft() {
    left -= 50
    bob.style.left = left +'px'
    console.log(left)
}

function rotateEyes() { 
    eyes.classList.add('.rotate')
}

function moveBob(e) {
    const keyArrow = e.key
    console.log(keyArrow)

        if (keyArrow === 'ArrowRight') {
            moveRight()
        }
        if (keyArrow === 'ArrowLeft') {
            rotateEyes()
            moveLeft()
        }
}

document.addEventListener('keydown', moveBob)





