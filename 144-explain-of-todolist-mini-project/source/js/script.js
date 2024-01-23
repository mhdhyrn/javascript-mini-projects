let input = document.querySelector('input')
let ul = document.querySelector('ul')
let form = document.querySelector('form')
let newLi
let newSpan
let newI

form.addEventListener("submit" , function(event) {
    event.preventDefault()
})

input.addEventListener('keydown' , function(event){
    if(event.key === "Enter"){
        
        if(event.target.value.trim()){
            addNewTodo(event.target.value.trim())
            event.target.value = ""
        }
    }
})

function addNewTodo (inpVal) {
    newLi = document.createElement('li')
        newLi.className = "list-group-item d-flex justify-content-between align-items-center"
        newSpan = document.createElement('span')
        newSpan.innerHTML = inpVal
        newLi.append(newSpan)
        newI = document.createElement('i')
        newI.className = "fa fa-trash-o delete"
        newLi.append(newI)
        ul.append(newLi)
        newI.addEventListener('click' , function(event) {
            event.target.parentElement.remove()
        })
}