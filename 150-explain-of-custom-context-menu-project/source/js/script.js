let body = document.querySelector('body')
let contextMenu = document.getElementById('contextMenu')

body.addEventListener('contextmenu' , contextMenuHandler)
body.addEventListener('click' , clickHandler)
body.addEventListener('keydown' , keyDownHandler)

function contextMenuHandler(event) {
    event.preventDefault()
    contextMenu.style.display = 'block'
    contextMenu.style.top = event.pageY
    contextMenu.style.left = event.pageX
}

function clickHandler(){
    contextMenu.style.display = 'none'
}

function keyDownHandler(event) {
    if(event.key === "Escape"){
        contextMenu.style.display = 'none'
    }
}