let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')

document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
})