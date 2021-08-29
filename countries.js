const loadWeather = () => {
    const inputField = document.getElementById('input');
    const inputFieldValue = inputField.value;
    const cityName = inputFieldValue;
    const apiKey = 'eb4b7540dacd0842064e3c87dc60c04c';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => console.log(data.main.temp));
}
