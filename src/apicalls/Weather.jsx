const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'Enter your OpenWeather API Key Here';

export async function fetchWeatherData(lat, lon) {
    try {
      let [weatherPromise, forcastPromise] = await Promise.all([
        fetch(
          `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ),
      ]);
  
      const weather = await weatherPromise.json(); //Getting Current Weather data.
      const forcast = await forcastPromise.json(); //Getting 5 day forecast data.
      return [weather, forcast];
    } catch (error) {
      console.log(error);
    }
  }