let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('seconds')
let newHour , newMinute , newSecond

setInterval(()=>{
    let newDate = new Date()
    newHour = newDate.getHours()
    newMinute = newDate.getMinutes()
    newSecond = newDate.getSeconds()
    if(newSecond < 10){
        newSecond = '0' + newSecond
    }
    if(newMinute < 10){
        newMinute = '0' + newMinute
    }
    if(newHour < 10){
        newHour = '0' + newHour
    }
    second.innerHTML = newSecond
    minute.innerHTML = newMinute
    hour.innerHTML = newHour
},1000)