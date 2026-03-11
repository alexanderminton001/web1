buttons = document.querySelector('.buttons')

btn = document.createElement('button')
btn.innerText = "applause"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    applause.play()
})
buttons.appendChild(btn)
