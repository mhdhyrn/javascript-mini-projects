let selectCountry = document.getElementById('selectCountry')
let selectCity = document.getElementById('selectCity')
let countries = {
    iran: [
        'tehran',
        'mashhad',
        'shiraz',
    ],
    usa: [
        'san diago',
        'los angles',
        'new york'
    ],
    canada: [
        'toronto',
        'montreal',
        'ottawa'
    ]
}

selectCountry.addEventListener('change', changeCity)

function changeCity () {
    let citiesOfCountry = countries[selectCountry.value]
    if(citiesOfCountry === undefined){
        selectCity.innerHTML = ''
        selectCity.innerHTML += '<option value="select">Select city...</option>'
    }else{  
        selectCity.innerHTML = ''
        citiesOfCountry.forEach(function(city){
        selectCity.innerHTML += '<option value="' + city + '">' + city + '</option>'
    })
    }
}
