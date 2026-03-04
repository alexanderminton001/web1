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
y = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {x = x + 10}
    if (event.key == 'ArrowUp') { y = y - 10}
    if (event.key == 'ArrowLeft') {x = x - 10}
    if (event.key == 'ArrowDown') {y = y + 10}
    moveBox.style.transform = `translate(${x}px, ${y}px)`
})



hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.height = "200px"
    hoverBox.style.width = "300px"
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.height = "60px"
    hoverBox.style.width = "250px"
})


dblClickBox.addEventListener('click', () => {
    dblClickBox.classlist.toggle('start')
})

