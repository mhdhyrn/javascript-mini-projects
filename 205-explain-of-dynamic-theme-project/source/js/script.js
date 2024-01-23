let btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click' , changeThemeHandler)
});

function changeThemeHandler(e) {
    let dataColor = e.target.dataset.color
    document.documentElement.style.setProperty('--theme-color' , dataColor)
}