const input = document.getElementById('range')
const container = document.querySelector('.container')

input.addEventListener('change' , (e)=> {
    console.log(e.target.value)
    let brRange = e.target.value
    container.style.filter = 'brightness(' + brRange + '%)'
})