const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eaba69b191msh97878fbfa0ece1ap1cf785jsne2f0d0da53ad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city

	const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


getWeather("Karachi")




const getCitiesWeather = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			// Process the weather data for each city
			processWeatherData(city, response);
		})
		.catch(err => console.error(err));
};


const processWeatherData = (city, data) => {
	console.log(`Weather data for ${city}:`, data);
	console.log(data.cloud_pct)
	
	const cityNameElement = document.getElementById(city + '-name');
	document.getElementById(city + "_temp").innerHTML = data.temp
	document.getElementById(city + "_cloud_pct").innerHTML = data.cloud_pct
	document.getElementById(city + "_min_temp").innerHTML = data.min_temp
	document.getElementById(city + "_max_temp").innerHTML = data.max_temp
	document.getElementById(city + "_humidity").innerHTML = data.humidity
	document.getElementById(city + "_feels_like").innerHTML = data.feels_like
	document.getElementById(city + "_sunrise").innerHTML = data.sunrise
	document.getElementById(city + "_sunset").innerHTML = data.sunset
	document.getElementById(city + "_wind_speed").innerHTML = data.wind_speed

};


getCitiesWeather("New York")
getCitiesWeather("Islamabad")
getCitiesWeather("Istanbul")
getCitiesWeather("Paris")
getCitiesWeather("Tokyo")




