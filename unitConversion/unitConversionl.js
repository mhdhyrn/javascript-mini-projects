let title = document.querySelector("h1")
let notif = document.querySelector("h2")
let convertBtn = document.getElementById('convert-btn')
let changeBtn = document.getElementById('change-btn')
let resetBtn = document.getElementById('reset-btn')
let input = document.querySelector("input")
let baseTempUnit = "fahrenheit"
let finalResult = 0
let inputValue = ""

input.focus()
convertBtn.disabled = true
resetBtn.disabled = true

convertBtn.addEventListener('click' , convertClick)
resetBtn.addEventListener('click' , resetClick)
changeBtn.addEventListener('click' , changeClick)
input.addEventListener('keyup' , keyUpInput)

function convertClick() {
    switch (baseTempUnit) {
        case "fahrenheit":
            finalResult = (inputValue - 32) * 5.9
            notif.innerHTML = inputValue + "°F = " + finalResult + "°C"
            notif.style.display = 'block'
            break;
        case "celsius":
            finalResult = (inputValue * 1.8) + 32
            notif.innerHTML = inputValue + "°C = " + finalResult + "°F"
            notif.style.display = 'block'
            break;
        default:
            break;
    }

}
function resetClick() {
    document.querySelector("input").value = ""
    inputValue = ""
    notif.style.display = 'none'
    convertBtn.disabled = true
    resetBtn.disabled = true
}
function changeClick() {
    switch (baseTempUnit) {
        case "fahrenheit":
            document.querySelector("h1").innerHTML = "Convert Celsius to Fahrenhei"
            baseTempUnit = "celsius"
            break;
        case "celsius":
            document.querySelector("h1").innerHTML = "Convert Fahrenheit to Celsius"
            baseTempUnit = "fahrenheit"
            break;
        default:
            document.querySelector("h1").innerHTML = "Convert Celsius to Fahrenhei"
            break;
    }
}
function keyUpInput() {
    inputValue = input.value.trim()
        if(inputValue === "" || isNaN(inputValue)){
        convertBtn.disabled = true
        resetBtn.disabled = true
    }else {
        convertBtn.disabled = false
        resetBtn.disabled = false
    }
}