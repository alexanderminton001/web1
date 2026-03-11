buttons = document.querySelector('.buttons')
applause = document.querySelector('.applause')
boo = document.querySelector('.boo')
gasp = document.querySelector('.gasp')
tada = document.querySelector('.tada')
victory = document.querySelector('.victory')
wrong = document.querySelector('.wrong')

sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


for (let i = 0; i < 6; i = i + 1) {
    btn = document.createElement('button')
    btn.innerText = sounds[i]
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        applause.play()
})
buttons.appendChild(btn)
}

btn = document.createElement('button')
btn.innerText = "applause"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    applause.play()
})
buttons.appendChild(btn)



