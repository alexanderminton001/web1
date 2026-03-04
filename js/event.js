clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click', () => {
    clickBox.style.backgroundColor = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
    clickBox.style.color = 'white'
})


spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})


x = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x = x + 10;
        moveBox.style.transform = `translateX(${x]px)`
    }
})

