const addTodo = document.getElementById('add_btn')
const modal = document.getElementById('todo_form')
const modalInput = document.getElementById('todo_input')
const closeModalBtn = document.querySelector('.close-modal')
const modalSub = document.getElementById('todo_submit')
const noStatus = document.getElementById('no_status')


function removeTodoHandler (event) {
    event.target.parentElement.remove()
}


closeModalBtn.addEventListener('click' , function () {
    modal.classList.remove('active')
})

addTodo.addEventListener('click' , function () {
    modal.classList.add('active')
})

modalSub.addEventListener('click' , function () {
    let inpValue = modalInput.value.trim()
    modalInput.value = ""
    modal.classList.remove('active')
    let newTodoDiv = document.createElement('div')
    newTodoDiv.textContent = inpValue 
    newTodoDiv.className = "todo"
    newTodoDiv.setAttribute('draggable' , 'true')
    let newTodoSpan = document.createElement('span')
    newTodoSpan.className = "close"
    newTodoSpan.textContent = "×"
    newTodoSpan.addEventListener('click' , removeTodoHandler)
    newTodoDiv.append(newTodoSpan)
    noStatus.append(newTodoDiv)
})