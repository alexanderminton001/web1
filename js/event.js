clickBox = document.querySelector('.click')

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


