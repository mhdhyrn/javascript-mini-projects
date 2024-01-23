let body = document.querySelector('body')
let keyCode = document.getElementById('keyCode')
let eventKey = document.getElementById('eventKey')
let eventLocation = document.getElementById('eventLocation')
let eventWhich = document.getElementById('eventWhich')
let eventCode = document.getElementById('eventCode')
let mainDisplay = document.getElementById('main-display')
let initialDisplay = document.getElementById('initial-display')

body.addEventListener('keydown' , function(event) {
    event.preventDefault()
    
    mainDisplay.style.display = 'flex'
    initialDisplay.style.display = 'none'
    keyCode.innerHTML = event.key
    eventKey.innerHTML = event.keyCode
    eventCode.innerHTML = event.code
    eventLocation.innerHTML = event.location
    eventWhich.innerHTML = event.which
    console.log(event)
    if(event.key === " "){
        keyCode.innerHTML = "space"
    }
})