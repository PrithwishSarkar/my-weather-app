import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function DayCard(props){
    return(
        <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(10px)',
            margin: '0.5rem', padding: '0.5rem', borderRadius: '4px'
        }}>
        <Grid container> 
            <Grid item xs={6} direction={'column'} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px'
        }}>
            <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {props.date}
                    </Typography>
            <Typography variant="h3"
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            color: 'rgba(0,0,0, .85)',
                            fontFamily: 'Poppins'
                        }}
                    >
                        {props.weather}
                    </Typography>
            </Grid>

            <Grid item xs={3} direction={'column'} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px'
        }}>
                        <DeviceThermostatIcon />
                        {props.temp}
            </Grid>

            <Grid item xs={3} direction={'column'} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px'
        }}>
                <OpacityIcon />
                {props.humidity}

            </Grid>

            
        </Grid>
        </Box>
    );//Returns the forecast details for each day.
}