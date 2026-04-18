const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const ball = document.createElement("div");
const leftPaddle = document.createElement("div");
const rightPaddle = document.createElement("div");
const scoreDisplay = document.createElement("div");

document.body.appendChild(ball);
document.body.appendChild(leftPaddle);
document.body.appendChild(rightPaddle);
document.body.appendChild(scoreDisplay);

const leftPaddleWidth = 20;
const leftPaddleHeight = 200;
const leftPaddleSpeed = 12;
const leftPaddleXPosition = 50;
let leftPaddleYPosition = windowHeight / 2 - leftPaddleHeight / 2;

const rightPaddleWidth = 20;
const rightPaddleHeight = 200;
const rightPaddleSpeed = 12;
const rightPaddleXPosition = windowWidth - 70;
let rightPaddleYPosition = windowHeight / 2 - rightPaddleHeight / 2;

const ballRadius = 30;
let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;
const ballSpeed = 10;
let ballXDirection = 1;
let ballYDirection = 1;

let score = 0;

let wKey = false;
let sKey = false;
let arrowUpKey = false;
let arrowDownKey = false;

createBall();
createLeftPaddle();
createRightPaddle();
createScoreDisplay();

function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "green";
    ball.style.position = "absolute";
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
    ball.style.zIndex = "10";
}

function createLeftPaddle() {
    leftPaddle.style.height = `${leftPaddleHeight}px`;
    leftPaddle.style.width = `${leftPaddleWidth}px`;
    leftPaddle.style.backgroundColor = "blue";
    leftPaddle.style.position = "absolute";
    leftPaddle.style.left = `${leftPaddleXPosition}px`;
    leftPaddle.style.top = `${leftPaddleYPosition}px`;
    leftPaddle.style.zIndex = "10";
}

function createRightPaddle() {
    rightPaddle.style.height = `${rightPaddleHeight}px`;
    rightPaddle.style.width = `${rightPaddleWidth}px`;
    rightPaddle.style.backgroundColor = "red";
    rightPaddle.style.position = "absolute";
    rightPaddle.style.left = `${rightPaddleXPosition}px`;
    rightPaddle.style.top = `${rightPaddleYPosition}px`;
    rightPaddle.style.zIndex = "10";
}

function createScoreDisplay() {
    scoreDisplay.style.position = "absolute";
    scoreDisplay.style.top = "20px";
    scoreDisplay.style.right = "20px";
    scoreDisplay.style.padding = "10px 16px";
    scoreDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
    scoreDisplay.style.border = "2px solid #1f3c88";
    scoreDisplay.style.borderRadius = "12px";
    scoreDisplay.style.color = "#1f3c88";
    scoreDisplay.style.fontFamily = "Arial, sans-serif";
    scoreDisplay.style.fontSize = "28px";
    scoreDisplay.style.fontWeight = "700";
    scoreDisplay.style.zIndex = "20";
    updateScore();
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    if (ballYPosition <= 0 || ballYPosition >= windowHeight - 2 * ballRadius) {
        ballYDirection *= -1;
    }

    if (ballXPosition <= 0 || ballXPosition >= windowWidth - 2 * ballRadius) {
        ballXDirection *= -1;
    }

    const ballTop = ballYPosition;
    const ballBottom = ballYPosition + 2 * ballRadius;
    const ballLeft = ballXPosition;
    const ballRight = ballXPosition + 2 * ballRadius;

    const leftPaddleTop = leftPaddleYPosition;
    const leftPaddleBottom = leftPaddleYPosition + leftPaddleHeight;
    const leftPaddleRight = leftPaddleXPosition + leftPaddleWidth;

    const rightPaddleTop = rightPaddleYPosition;
    const rightPaddleBottom = rightPaddleYPosition + rightPaddleHeight;
    const rightPaddleLeft = rightPaddleXPosition;
    const rightPaddleRight = rightPaddleXPosition + rightPaddleWidth;

    const hitLeftPaddle =
        ballBottom >= leftPaddleTop &&
        ballTop <= leftPaddleBottom &&
        ballLeft <= leftPaddleRight &&
        ballRight >= leftPaddleXPosition &&
        ballXDirection === -1;

    const hitRightPaddle =
        ballBottom >= rightPaddleTop &&
        ballTop <= rightPaddleBottom &&
        ballRight >= rightPaddleLeft &&
        ballLeft <= rightPaddleRight &&
        ballXDirection === 1;

    if (hitLeftPaddle) {
        ballXPosition = leftPaddleRight;
        ballXDirection *= -1;
        score += 1;
        updateScore();
    }

    if (hitRightPaddle) {
        ballXPosition = rightPaddleLeft - 2 * ballRadius;
        ballXDirection *= -1;
        score += 1;
        updateScore();
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function moveLeftPaddle() {
    if (wKey && leftPaddleYPosition > 0) {
        leftPaddleYPosition -= leftPaddleSpeed;
    }

    if (sKey && leftPaddleYPosition < windowHeight - leftPaddleHeight) {
        leftPaddleYPosition += leftPaddleSpeed;
    }

    leftPaddle.style.top = `${leftPaddleYPosition}px`;
}

function moveRightPaddle() {
    if (arrowUpKey && rightPaddleYPosition > 0) {
        rightPaddleYPosition -= rightPaddleSpeed;
    }

    if (arrowDownKey && rightPaddleYPosition < windowHeight - rightPaddleHeight) {
        rightPaddleYPosition += rightPaddleSpeed;
    }

    rightPaddle.style.top = `${rightPaddleYPosition}px`;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "w" || event.key === "W") {
        wKey = true;
    }

    if (event.key === "s" || event.key === "S") {
        sKey = true;
    }

    if (event.key === "ArrowUp") {
        arrowUpKey = true;
    }

    if (event.key === "ArrowDown") {
        arrowDownKey = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "w" || event.key === "W") {
        wKey = false;
    }

    if (event.key === "s" || event.key === "S") {
        sKey = false;
    }

    if (event.key === "ArrowUp") {
        arrowUpKey = false;
    }

    if (event.key === "ArrowDown") {
        arrowDownKey = false;
    }
});

function animate() {
    moveBall();
    moveLeftPaddle();
    moveRightPaddle();
    requestAnimationFrame(animate);
}

animate();
