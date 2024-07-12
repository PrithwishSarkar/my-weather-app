import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

export default function TodayWeather({ data }) {
    // let initFav;
    // if (localStorage.getItem("favourites") === null)
    //   initFav = [];
    // else
    //   initFav = JSON.parse(localStorage.getItem("favouritess"));

    // const [keyID, setKeyID] = useState(-1);
    // const [favList, setFavList] = useState(initFav);
    // const [isPresent, setIsPresent] = useState(false);


    // function removeEntry(xCity) {
    //     setFavList(prev => {
    //         return prev.filter((item, index) => {
    //             return item.name !== xCity;
    //         })
    //     }
    //     );
    // }

    // function addEntry(cityVal, latVal, lonVal) {
    //     setKeyID(keyID + 1)
    //     setFavList((prev) => {
    //         return [
    //             ...prev,
    //             {
    //                 key: keyID,
    //                 name: cityVal,
    //                 lat: latVal,
    //                 lon: lonVal
    //             }
    //         ];
    //     });
    // }

    // useEffect(() => {
    //     localStorage.setItem("favourites", JSON.stringify(favList));
    // }, [favList]);

    function direction(deg) {
        let tmp = parseFloat(deg);
        let val = ((tmp / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[parseInt(val % 16)];
    }
    function capital(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1));
    }
    const city = data.name;
    const temp = data.main.temp + "°C";
    // const feels_like = data.main.feels_like + "°C";
    const humidity = data.main.humidity + "%";
    const wind_speed = (parseFloat(data.wind.speed) * 3.6).toFixed(2) + " km/h ";
    const wind_dir = direction(data.wind.deg);
    const weather = capital(data.weather[0].description);
    const country = data.sys.country;

    // for (let i = 0; i < favList.length; i++) 
    //     if (city == favList[i].name)
    //         setIsPresent(true);

    return (
        <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(5px)',
            margin: '2rem', padding: '2rem', borderRadius: '10px', boxShadow: {
                xs: 'none',
                sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
            },
        }}>

            <Grid container spacing={2} justifyContent={'space-around'}>

                <Grid item xs={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px', paddingBottom: '10px',
                    marginBottom: '50px', backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(10px)',
                }}>
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '22px', sm: '36px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {weather}
                    </Typography>
                </Grid>

                <Grid item xs={6} direction={'column'} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px', paddingBottom: '10px',
                    marginBottom: '50px', backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(10px)',
                }}>

                    <DeviceThermostatIcon style={{ fontSize: '2rem' }} />
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '20px', sm: '30px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {temp}
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px'
                }}>
                    <FmdGoodIcon />
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '18px', sm: '28px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins',
                            marginLeft: "20px"
                        }}
                    >
                        {city}, {country}
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '80px'
                }}>
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '16px', sm: '24px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {new Date().toLocaleString()} IST
                    </Typography>

                </Grid>

                <Grid item xs={5} direction={'column'} sx={{
                    display: 'flex',
                    justifyContent: 'center', borderRadius: '10px',
                    alignItems: 'center', paddingBottom: '10px',
                    height: '90px', backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(10px)', boxShadow: {
                        xs: 'none',
                        sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
                    },
                }}>
                    <OpacityIcon style={{ fontSize: '2rem' }} />
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '18px', sm: '24px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {humidity}
                    </Typography>
                </Grid>

                <Grid item xs={5} direction={'column'} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px', paddingBottom: '10px',
                    height: '90px', backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(10px)', boxShadow: {
                        xs: 'none',
                        sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
                    },
                }}>
                    <AirIcon style={{ fontSize: '2rem' }} />
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '18px', sm: '24px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {wind_speed}
                    </Typography>
                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '18px', sm: '20px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {wind_dir}
                    </Typography>
                </Grid>

            </Grid>

            {/* {isPresent ? <Button size='medium' variant='contained' onClick={addEntry(city, data.coord.lat, data.coord.lon)} sx={{

                }}>Add to Favourites</Button>
                    :
                    <Button size='medium' variant='contained' onClick={removeEntry(city)} sx={{

                    }}>Remove from Favourites</Button>
                } */}
        </Box>

    );
}