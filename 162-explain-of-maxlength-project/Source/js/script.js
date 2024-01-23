let input = document.querySelector('input')
let span = document.querySelector('span')
let inputMaxLength = input.getAttribute('maxlength')
let value
input.addEventListener('keydown' , inputHandler)

function inputHandler(){
    value = inputMaxLength - input.value.length
    span.innerHTML = value
}