const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export async function findCities(input) {
    try {
      const response = await fetch(
        `${API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'Enter your Rapid API key here',
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            }
          }
      );
  
      const data = await response.json(); //Getting city names as per search query.
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  