// Write your DOM code here!
let red = document.querySelector('.red')

red.addEventListener('click', () => {
    let body = document.querySelector('body')
    body.style.backgroundColor = 'red'
})

let white = document.querySelector('.white')

white.addEventListener('click', () => {
    let body = document.querySelector('body')
    body.style.backgroundColor = 'white'
})

let blue = document.querySelector('.blue')

blue.addEventListener('click', () =>  {
    let body = document.querySelector('body')
    body.style.backgroundColor = 'blue'
})

let yellow = document.querySelector('.yellow')

yellow.addEventListener('click', () => {
    let body = document.querySelector('body')
    body.style.backgroundColor = 'yellow'
})