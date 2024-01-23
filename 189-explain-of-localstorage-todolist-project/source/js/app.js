const input = document.getElementById('itemInput')
const todosUl = document.querySelector('#todoList')
const addButton = document.getElementById('addButton')
// get todos of localStorage
let todos = JSON.parse(localStorage.getItem('todos'))
// check todos to avoid null value
todos === null ? todos = [] : null
let todoIndex = 0


// set focus for input on page load
input.focus()

// set element for todo of localStorage
todos.forEach((todo) => {
    addTodoElement(todo.content , todo.status)
});


// add event to elements
input.addEventListener('keydown' , addTodo)
addButton.addEventListener('click' , addTodo)



function addTodo (e) {
    let inputValue = input.value.trim()
    input.focus()
    // validation to add todo
    if(inputValue.length > 2 && (e.keyCode === 13 || e.keyCode === undefined)){
        // add todo object in todos array
        todos.splice(todos.length, 0 , {content: inputValue , status: "Complete" , index: todoIndex})
        addTodoElement(todos[todos.length -1].content , todos[todos.length -1].status)
        input.value = ""
        // replace new todos array
        localStorage.setItem('todos' , JSON.stringify(todos))
    }
}

function addTodoElement (value , status) {
    // create element for new todo
    let li = document.createElement('li')
    let label = document.createElement('label')
    let delBtn = document.createElement('button')
    let statusBtn = document.createElement('button')
    li.className  = 'completed well'
    // set index id for todo
    li.id = todoIndex
    // increase index for next todo
    todoIndex += 1
    delBtn.className = 'btn btn-danger'
    statusBtn.className = 'btn btn-success'
    label.textContent = value
    delBtn.textContent = 'Delete'
    statusBtn.textContent = status
    // toggle for button status
    if(status === "Complete"){
        label.classList.remove('uncompleted')
    } else {
        label.classList.add('uncompleted')
    }
    li.append(label , statusBtn , delBtn)
    todosUl.append(li)
    // add click event to button
    delBtn.addEventListener('click' , deleteTodoHandler)
    statusBtn.addEventListener('click' , checkTodoHandler)
}

function deleteTodoHandler(e) {
    let indexElement = e.target.parentElement.id
    e.target.parentElement.remove()
    // replace todos with todos that not included todo considered
    todos = todos.filter((todo) => {
        return todo.index != indexElement
    })
    localStorage.setItem('todos' , JSON.stringify(todos))
}
function checkTodoHandler(e) {
    let indexElement = e.target.parentElement.id
    todos.map(todo => {
        if(todo.index == indexElement) {
            // toggle for button status
            if(todo.status === "Complete"){
                todo.status = "unComplete"
                e.target.previousSibling.classList.add('uncompleted')
                e.target.textContent = 'unComplete'
            } else {
                todo.status = "Complete"
                e.target.previousSibling.classList.remove('uncompleted')
                e.target.textContent = 'Complete'
            }
        }
    })
    localStorage.setItem('todos' , JSON.stringify(todos))
}