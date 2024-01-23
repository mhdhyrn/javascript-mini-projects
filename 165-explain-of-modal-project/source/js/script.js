let $ = document

const button = $.querySelector('button')
const modalParent = $.querySelector('.modal-parent')
const x = $.querySelector('.X')
const sectionElem = $.querySelector('section')


function showModal() {
    modalParent.style.display = 'block'
    sectionElem.style.filter = 'blur(10px)'
    button.blur()
}

function hideModalWithX() {
    modalParent.style.display = 'none'
    sectionElem.style.filter = 'blur(0px)'
}

function hideModalWithEsc(event) {
    if (event.keyCode === 27) {
        modalParent.style.display = 'none'
        sectionElem.style.filter = 'blur(0px)'
    }
}


button.addEventListener('click', showModal)
x.addEventListener('click', hideModalWithX)
document.body.addEventListener('keyup', hideModalWithEsc)