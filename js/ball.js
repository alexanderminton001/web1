const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let LPadelHeight = 200
let LPadelSpeed = 40
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2

const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }
    let ballTop = ballYPosition
    let ballBottom = BallYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPadelTop = LPadelYPosition
    let LPadelBottom = LPadelYPosition + LPadelHeight
    let LPadelRight = LPadelXPosition + LPadelWidth

    if(
        (ballBottom >= LPadelTop) &&
        (ballTop <= LPadelBottom) &&
        (ballLeft <= LPadelRight) &&
        (ballXDirection == -1)

    ) {
            ballXDirection = ballXDirection * -1
        }
}

createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPadel()
function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = `absolute`
    LPadel.style.left = "50px"
    LPadel.style.top = `${LPadelYPosition}px`
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        if (LPadelYPosition <= 0) {
            LPadelYPosition = 0
        }
        else {
            LPadelYPosition = LPadelYPosition - LPadelSpeed
        }
    }
    if (event.key == 's') {
        if (LPadelYPosition >= windowHeight - LPadelHeight){
            LPadelYPosition = windowHeight - LPadelHeight
        }
        else {
            LPadelYPosition = LPadelYPosition + LPadelSpeed
        }
    }
    LPadel.style.top = `${LPadelYPosition}px`
})

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPadel() {
    if (wKey == true && LPadelYPosition > 0) {
        LPadelYPosition = LPadelYPosition - LPadelSpeed
    }
    if (sKey == true && LPadelYPosition < windoHeight - LPadelHeight) {
        LPadelYPosition = LPadelYPosition + LPadelSpeed
    }
    LPadel.style.top = `${LPadelYPosition}px`
}


function animate() {
    moveBall()
    moveLPadel()
    requestAnimationFrame(animate)
}
animate()
