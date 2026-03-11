buttons = document.querySelector('.buttons')
applause = document.querySelector('.applause')
boo = document.querySelector('.boo')
gasp = document.querySelector('.gasp')
tada = document.querySelector('.tada')
victory = document.querySelector('.victory')
wrong = document.querySelector('.wrong')

btn = document.createElement('button')
btn.innerText = "applause"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    applause.play()
})
buttons.appendChild(btn)



