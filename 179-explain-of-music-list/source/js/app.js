let iElems = document.querySelectorAll('i')
let audioElems = document.querySelectorAll('audio')

function playSong (e) {
    const iDataset = e.target.dataset.name
    audioElems.forEach(function(audioElem) {
        if(audioElem.dataset.name === iDataset) {
            audioElem.play()
        } else {
            audioElem.pause()
        }
    })
}

iElems.forEach(function (iElem) {
    iElem.addEventListener('click' , playSong)
})