const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export async function findCities(input) {
    try {
      const response = await fetch(
        `${API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ea40d6783fmsh3738e242f449286p104688jsnf9b196457d82',
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            }
          }
      );
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  