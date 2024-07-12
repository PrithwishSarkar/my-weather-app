import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Search from './components/Search';
import { fetchWeatherData } from './apicalls/Weather';
import TodayWeather from './components/TodayWeather';
import WeeklyForecast from './components/WeeklyForecast';
import LoadingBox from './components/LoadingBox';
import ErrorBox from './components/ErrorBox';
import Image from './assets/background.jpg';
// import { Select, MenuItem } from "@mui/material";

function App() {

  // let initFav;
  // if (localStorage.getItem("favourites") === null)
  //   initFav = [];
  // else
  //   initFav = JSON.parse(localStorage.getItem("favouritess"));


  const [isLoading, setIsLoading] = useState(false);
  const [today, setToday] = useState(null);
  const [week, setWeek] = useState(null);
  const [error, setError] = useState(false)
  // const [city, setCity] = useState("");

  // const handleChange = (event) => {
  //   setCity(event.target.value);
  //   searchHandler(city);
  // };

  async function searchHandler(data) {
    const [lat, lon] = data.value.split(' ');

    setIsLoading(true);

    try {
      const [todayWeather, weekForecast] =
        await fetchWeatherData(lat, lon);
      setToday(todayWeather);
      setWeek(weekForecast);
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  let appContent = (
    <Box
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        minHeight: '500px',
      }}
    >

      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: { xs: '16px', sm: '24px' },
          color: 'rgba(0,0,0, .85)',
          fontFamily: 'Poppins',
          textAlign: 'center',
          margin: '2rem 0',
          maxWidth: '80%',

        }}
      >
        Explore current weather data and 5-day weather forecast for any city!
      </Typography>
    </Box>
  );

  if (today && week) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} md={today ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather data={today} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast data={week} />
        </Grid>
      </React.Fragment>
    );
  }

  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              color: 'rgba(0,0,0, .8)',
              lineHeight: 1,
              fontFamily: 'Poppins',
            }}
          >
            Loading...
          </Typography>
        </LoadingBox>
      </Box>
    );
  }


  return (

    <Box sx={{
      backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      height: '94vh', width: '94vw', margin: 0, padding: '3vh 3vw', overflow: { xs: 'scroll', md: 'hidden' }
    }}>

      <Grid container>
        <Grid item xs={12}>
          <Box display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: '100%',
              marginBottom: '1rem',
            }}>
            <Typography variant="h4">
              My Weather App
            </Typography>
            {/* <Select
              value={city}
              onChange={handleChange}
              sx={{

                width: 250,

              }}
            >
              {initFav.map((item, index)=>(
                  <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
              
               <MenuItem value={2}>Black</MenuItem>
              <MenuItem value={3}>Blue</MenuItem>
              <MenuItem value={4}>Green</MenuItem>
              <MenuItem value={5}>Yellow</MenuItem> 
            </Select> */}
          </Box>
          <Search onSearchChange={searchHandler} />
        </Grid>
        {appContent}
      </Grid>

    </Box>
  );
}

export default App;
