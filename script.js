let mainArray = [
    100,200,500,1,2,3
]
let input = prompt("Enter Number :" , 0)
let finalyIndexs = []
let minDistance = -1

let secondIndex = 0
let sumOfIndexs = 0
let distance = 0
let mainIndex = 0
let thirdIndex = 0

for(let i = 0; i < mainArray.length; i++){
    mainIndex = mainArray[i]
    for(let g = 0; g < mainArray.length; g++){
        if(i !== g) {
            secondIndex = mainArray[g]
            for(let h = 0; h < mainArray.length; h++){
                if(i !== h && h !== g){
                    thirdIndex = mainArray[h]
                    sumOfIndexs = mainIndex + secondIndex + thirdIndex
                    distance = sumOfIndexs - input;
                    (distance < 0) ? distance = distance * -1 : null;
                    (minDistance === -1) ? minDistance = distance : null;
                    if(distance <= minDistance){
                        minDistance = distance
                        finalyIndexs = [mainIndex , secondIndex , thirdIndex]
                    }
                }
            }
            
        }
    }
}

let h1Elem = document.querySelector('h1')
h1Elem.textContent = "Result : " + finalyIndexs[0] + " & " + finalyIndexs[1] + " & " + finalyIndexs[2]
