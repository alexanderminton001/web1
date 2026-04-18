const ball = document.createElement('div')
document.body.appendChild(ball)
const lPadel1 = document.createElement('div')
document.body.appendChild(lPadel1)
const lPadel2 = document.createElement('div')
document.body.appendChild(lPadel2)


//Window Variables
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


//Ball Variables
const ballRadius = 50
let ballYPosition = (windowHeight / 2) - ballRadius
let ballXPosition = (windowWidth / 2) - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1


//Paddle Variables
let lPadelHeight = 100
let lPadelWidth = 20
let lPadelSpeed = 5
let lPadel1YPosition = (windowHeight / 2) - (lPadelHeight / 2)
let lPadel2YPosition = (windowHeight / 2) - (lPadelHeight / 2)
let lPadelXPosition = 70


//This should display the score and add to it each time a player gets a point
let score1Display = document.createElement('p')
let score1 = 0
let score2Display = document.createElement('p')
let score2 = 0
document.body.appendChild(score1Display)
document.body.appendChild(score2Display)


//This creates the ball using CSS
createBall()


function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "pink"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}


function moveBall() {
    // Move the ball
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection


    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`


    if (ballYPosition < 0 || ballYPosition > (windowHeight - (2 * ballRadius))) {
        ballYDirection = ballYDirection * -1
    }


    // Update collision boundaries
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let ballRight = ballXPosition + 2 * ballRadius


    //Paddle variables to hit the paddle
    let lPadel1Top = lPadel1YPosition
    let lPadel1Bottom = lPadel1YPosition + lPadelHeight
    let lPadelRight = lPadelXPosition + lPadelWidth


    let lPadel2Top = lPadel2YPosition
    let lPadel2Bottom = lPadel2YPosition + lPadelHeight
    let lPadel2Left = windowWidth - lPadelXPosition - lPadelWidth


    // Then check collision
    if (
        ballBottom >= lPadel1Top &&
        ballTop <= lPadel1Bottom &&
        ballLeft <= lPadelRight &&
        ballRight >= lPadelXPosition &&
        ballXDirection === -1
    ) {
        ballXDirection *= -1
    }
    if (
        ballBottom >= lPadel2Top &&
        ballTop <= lPadel2Bottom &&
        ballRight >= lPadel2Left &&
        ballLeft <= lPadel2Left + lPadelWidth &&
        ballXDirection === 1
    ) {
        ballXDirection *= -1
    }


    // Right wall player 1 scores
    if (ballXPosition > windowWidth - (2 * ballRadius)) {
        score1++
        resetBall()
    }
    // Left wall player 2 scores
    if (ballXPosition < 0) {
        score2++
        resetBall()
    }
}


makeScoreBoard()
//This will handle the making and updating of the scoreboard and level
function makeScoreBoard() {
    score1Display.innerText = "Score 1:" + score1
    score1Display.style.position = 'absolute'
    score1Display.style.top = "20px"
    score1Display.style.left = "20px"
    score1Display.style.color = "black"
    score1Display.style.background = "teal"


    score2Display.innerText = "Score 2: " + score2
    score2Display.style.position = 'absolute'
    score2Display.style.color = "black"
    score2Display.style.background = "red"
    score2Display.style.top = "20px"
    score2Display.style.right = "20px"
}


function updateScore() {
    score1Display.innerText = "Score 1:" + score1
    score2Display.innerText = "Score 2: " + score2
}


function resetBall() {
    ballXPosition = windowWidth / 2 - ballRadius
    ballYPosition = windowHeight / 2 - ballRadius
    ballXDirection *= -1
}


// This section goes with the paddle movement
// This is for player 2
let iKey = false
let kKey = false
document.addEventListener('keydown', (event) => {
    if (event.key === 'i') {
        iKey = true
    }
    if (event.key === 'k') {
        kKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'i') {
        iKey = false
    }
    if (event.key === 'k') {
        kKey = false
    }
})


//This is for player 1
let wKey = false
let sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        wKey = true
    }
    if (event.key === 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        wKey = false
    }
    if (event.key === 's') {
        sKey = false
    }
})


// This creates the paddel using CSS
createlPadel1()
createlPadel2()


function createlPadel1() {
    lPadel1.style.height = `${lPadelHeight}px`
    lPadel1.style.width = `${lPadelWidth}px`
    lPadel1.style.backgroundColor = "teal"
    lPadel1.style.position = 'absolute'
    lPadel1.style.left = `${lPadelXPosition}px`
    lPadel1.style.top = `${lPadel1YPosition}px`
}


function createlPadel2() {
    lPadel2.style.height = `${lPadelHeight}px`
    lPadel2.style.width = `${lPadelWidth}px`
    lPadel2.style.backgroundColor = "red"
    lPadel2.style.position = 'absolute'
    lPadel2.style.right = `${lPadelXPosition}px`
    lPadel2.style.top = `${lPadel2YPosition}px`
}


// This allows the user to control the paddle and move it up and down
// This for player 1
function movelPadel1() {
    if (wKey === true && lPadel1YPosition > 0) {
        lPadel1YPosition = lPadel1YPosition - lPadelSpeed
    }
    if (sKey === true && lPadel1YPosition < windowHeight - lPadelHeight) {
        lPadel1YPosition = lPadel1YPosition + lPadelSpeed
    }


    lPadel1.style.top = `${lPadel1YPosition}px`
}


// This is for player 2
function movelPadel2() {
    if (iKey === true && lPadel2YPosition > 0) {
        lPadel2YPosition = lPadel2YPosition - lPadelSpeed
    }
    if (kKey === true && lPadel2YPosition < windowHeight - lPadelHeight) {
        lPadel2YPosition = lPadel2YPosition + lPadelSpeed
    }


    lPadel2.style.top = `${lPadel2YPosition}px`
}


//This replaces the interval function for a smoother feel
function animate() {
    moveBall()
    movelPadel1()
    movelPadel2()
    requestAnimationFrame(animate)
    updateScore()
}
animate()
