import React, {useState} from 'react';
import { CardContent, Typography, Card, Button } from '@mui/material';
import DayCard from './DayCard';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


export default function WeeklyForecast({data}){

const [clicked, setClicked] = useState(false);

    function formatDate(tmp)
{
    return (new Date(tmp*1000)).toDateString();
}
function changeCase(str)
{
    return (str.charAt(0).toUpperCase() + str.slice(1));
}
function handleClick(){
    setClicked(!clicked);
}

    const date1 = formatDate(data.list[7].dt);
        const weather1 = changeCase(data.list[7].weather[0].description);
        const humidity1 = data.list[7].main.humidity + "%";
        const temp1 = data.list[7].main.temp + "°C";
        // const rain1 = data.list[7].rain["3h"] + " mm";

        const date2 = formatDate(data.list[15].dt);
        const weather2 = changeCase(data.list[15].weather[0].description);
        const humidity2 = data.list[15].main.humidity + "%";
        const temp2 = data.list[15].main.temp + "°C";
        // const rain2 = data.list[15].rain["3h"] + " mm";

        const date3 = formatDate(data.list[23].dt);
        const weather3 = changeCase(data.list[23].weather[0].description);
        const humidity3 = data.list[23].main.humidity + "%";
        const temp3 = data.list[23].main.temp + "°C";
        // const rain3 = data.list[23].rain["3h"] + " mm";

        const date4 = formatDate(data.list[21].dt);
        const weather4 = changeCase(data.list[21].weather[0].description);
        const humidity4 = data.list[21].main.humidity + "%";
        const temp4 = data.list[21].main.temp + "°C";
        // const rain4 = data.list[31].rain["3h"] + " mm";

        const date5 = formatDate(data.list[31].dt);
        const weather5 = changeCase(data.list[31].weather[0].description);
        const humidity5 = data.list[31].main.humidity + "%";
        const temp5 = data.list[31].main.temp + "°C";
        // let calc5 = data.list[31].rain["3h"]
        // const rain5 = calc5 + " mm";
return(
    <Card  sx={{
        backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(5px)',
        margin: '2rem', 
    textAlign: 'center', boxShadow: {
        xs: 'none',
        sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
      },
    }}>
    {(!clicked)? <CardContent>
    <Typography variant="h5" align='center'>
              Five Day Forecast
            </Typography>
        <DayCard date={date1} weather={weather1} temp={temp1} humidity={humidity1} />
        <DayCard date={date2} weather={weather2} temp={temp2} humidity={humidity2} />
        <DayCard date={date3} weather={weather3} temp={temp3} humidity={humidity3} />
        <DayCard date={date4} weather={weather4} temp={temp4} humidity={humidity4} />
        <DayCard date={date5} weather={weather5} temp={temp5} humidity={humidity5} />
       <Button size='medium' variant='contained' onClick={handleClick} sx={{
        marginTop: '10px'
       }}>Show Temperature Graph</Button>
       </CardContent>

       :<CardContent>
        <Line backgroundColor
            data={{
                labels: [date1, date2, date3, date4, date5],
                datasets: [{
                    label: "Temperature",
                    data: [parseFloat(temp1), parseFloat(temp2), parseFloat(temp3), parseFloat(temp4), parseFloat(temp5)]
                }]
            }} />
        <Button size='medium' variant='contained' onClick={handleClick} sx={{
        marginTop: '10px'
       }}>Show Five Day Forecast</Button>
        </CardContent>}
        </Card>
        
);
    
}