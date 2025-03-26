const $ = document,
addBtn = $.querySelector('#addBtn'),
inputs = $.querySelector("#inputs"),
twinInputs = $.querySelectorAll(".twinInputs"),
input = $.querySelectorAll(".input"),
delBtn = $.querySelector("#delBtn"),
delSvg = $.querySelector("#delBtn").children[0],
showError = $.querySelector("#error"),
showResult = $.querySelector(".showResult"),
numberOfNodes = $.getElementById("numberOfNodes");

let nodeNumber = 0;
numberOfNodes.addEventListener('change', (e) => {
    nodeNumber = e.target.value
})
let collection = [['','']]
let divCounter = 1

addBtn.addEventListener('click', () => {
    showErrorHandler("")
    inputs.insertAdjacentHTML("beforeend", `
        <div class="twinInputs" data-divIndex="${divCounter}">
            <span>(</span>
            <input  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" 
            type = "number" class="input" onchange="changeInputHandler(event)" maxlength="1" data-inputIndex="0"/>
            <span>,</span>
            <input  
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            type = "number" class="input" onchange="changeInputHandler(event)" maxlength="1" data-inputIndex="1"/>
            <span>)</span>
        </div>
    `)
    collection.push(['',''])
    divCounter++
})

delBtn.addEventListener('click', () => {
    if(inputs.childElementCount !== 1){
        showErrorHandler("")
        const prevInput = inputs.lastElementChild
        console.log(prevInput)
        const divIndex = prevInput.dataset.divindex
        collection.splice(divIndex, 1)
        divCounter--
        prevInput.remove()
    } else {
        showErrorHandler("One input is required!")
    }
    
})

const changeInputHandler = (event) => {
    const divIndex = event.target.parentElement.dataset.divindex
    const inputIndex = event.target.dataset.inputindex
    collection[divIndex][inputIndex] = event.target.value
}

const showErrorHandler = (text) => {
    showError.innerHTML = text
    showError.classList = "vibration"
    setTimeout(() => {
        showError.classList = ""
    }, 500)
}

const submitHandler = () => {
    let algorithm = document.querySelector('input[name="algorithm"]:checked')
    showResult.innerHTML = ""
    if(!collection.every((index) => index[0] !== '' && index[1] !== '') || nodeNumber === 0){
        showErrorHandler("Please fill all inputs!")
    } else {
        showErrorHandler("")
        showResult.innerHTML = ""  

        switch (algorithm.value) {
            case "trespass":
                floydWarshall(collection);
                break;
            
            case "reflexive":
                reflexiveHandler(collection);
                break;
            
            case "symmetrical": 
                symmetricalHandler(collection);
                break;

            default:
                break;
        }  
    }
}


const symmetricalHandler = (collection) => {
    const result = []
    collection.map((i) => {
        const reverse = [...i].reverse()
        const findIndex = collection.findIndex((index) => index.every((value, i) => value === reverse[i]))
        if(findIndex === -1){
            result.push(reverse)
        }
    })
    if(!result.length){
        showResult.innerHTML = "No Output!"
    } else {
            result.forEach((row, index) => {
            const rowDiv = document.createElement("div")
            rowDiv.textContent = `Output ${index + 1}: (${row.join(", ")})`
            showResult.append(rowDiv)
          })
    }
}


const reflexiveHandler = (collection) => {
    const result = []
    const helper = []
    let row = collection.map((item) => item[0])
    let col = collection.map((item) => item[1])
    let maxRow = Math.max(...row)
    let maxCol = Math.max(...col)
    let rowAndCol = (maxRow >= maxCol) ? maxRow : maxCol
    for(let i = 1; i <= rowAndCol; i++){
        helper.push([i, i])
    }
    helper.map((item) => {
        const findIndex = collection.findIndex((index) => index.every((value, i) => value == item[i])) 
        console.log(findIndex)
        if(findIndex === -1){
            result.push(item)
        }
    })
    if(!result.length){
        showResult.innerHTML = "No Output!"
    } else {
            result.forEach((row, index) => {
            const rowDiv = document.createElement("div")
            rowDiv.textContent = `Output ${index + 1}: (${row.join(", ")})`
            showResult.append(rowDiv)
          })
    }
}


const floydWarshall = (collection) => {
    const matrix = Array.from({length: nodeNumber}, () => Array(Number(nodeNumber)).fill(0)) // OR  Array.from({length: maxRow}, Array.from({length: maxCol}, (index) => index = 0))  OR  Array(maxRow).fill(Array(maxCol).fill(0 ))
    collection.map((index) => {
        const [row, col] = index
        matrix[row - 1][col - 1] = 1
    })

    let output = [], input = []
    for (let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix.length; x++) {
            if(matrix[x][y])
                input.push(x)
            
            if(matrix[y][x])
                output.push(x)
        }

        input.map((i) => output.map((j) => matrix[i][j] = 1))

        input = []
        output = []
    }
    showResult.insertAdjacentHTML("beforeend", '<table id="matrixTable" border="1"></table>')
    const table = $.querySelector('#matrixTable')
    matrix.forEach(row => {
        const tr = document.createElement("tr")
        row.forEach(cell => {
        const td = document.createElement("td")
        td.textContent = cell
        tr.appendChild(td)
        })
        table.appendChild(tr);
    })
}