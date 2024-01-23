const switchElement = document.querySelector('.switch');

(
  function () {
    localStorage.setItem('theme' , 'light')
  } ()
)

switchElement.addEventListener('click', function () {
  let localTheme = localStorage.getItem('theme')
  console.log(localTheme)
  if(localTheme === 'light') {
    document.querySelector('body').classList.add('dark')
    localStorage.setItem('theme' , 'dark')
  } else {
    document.querySelector('body').classList.remove('dark')
    localStorage.setItem('theme' , 'light')
  }
  }
)
