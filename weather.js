const loadWeatherInformation = () => {
    const mainDiv = document.getElementById('main-result');
    mainDiv.textContent = '';
    mainDiv.classList.add('main-result1');
    const inputField = document.getElementById('search-inputField ');
    // console.log(inputField);
    let inputFieldValue = inputField.value;
    // if (inputFieldValue = '') {
    //     console.log('Please Enter a location for weather');
    // }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=eb4b7540dacd0842064e3c87dc60c04c`)
        .then(response => response.json())
        .then(data => showWeather(data));
    inputField.value = '';
    const body = document.getElementById('body');
    body.setAttribute('opacity', '0.1');

}
const showWeather = (weatherInformationObject) => {
    console.log(weatherInformationObject);
    const { weather, name, main } = weatherInformationObject;
    const mainDiv = document.getElementById('main-result');
    // const maxtempInLong = `${main.temp_max}`;
    // // Math.round
    // const maxtemp = (maxtempInLong - 273.1);
    // console.log(maxtemp);
    // console.log(weather[0].id);
    const creatDiv = document.createElement('div');
    creatDiv.innerHTML = `<h1>City Name: ${name}</h1><br><h1>Today Temparature: ${main.temp}</h1><br><h1>${name}'s max temparature ${main.temp_max}</h1><h1>${name}'s min temparature ${main.temp_min}</h1><h1>But here weather feels like ${main.feels_like}</h1>`;
    console.log(creatDiv);
    creatDiv.removeAttribute('opacity:none');
    creatDiv.classList.add('result');
    mainDiv.appendChild(creatDiv);
}
