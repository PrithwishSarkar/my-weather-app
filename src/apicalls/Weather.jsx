const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'e365c537ede7a5f259cea672ed377ec2';

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
  
      const weather = await weatherPromise.json();
      const forcast = await forcastPromise.json();
      return [weather, forcast];
    } catch (error) {
      console.log(error);
    }
  }