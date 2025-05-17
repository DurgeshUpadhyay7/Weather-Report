import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
   

  const HOT_URL = "https://images.unsplash.com/photo-1593867543157-03cb9ad15409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHNlYXNvbiUyMGltYWdlfGVufDB8fDB8fHww";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww";
  const RAIN_URL = "https://plus.unsplash.com/premium_photo-1661715319384-437cc4d1bbfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMGltYWdlfGVufDB8fDB8fHww";
  
   return (
    <div className="InfoBox">
    
    <div className='cardContainer'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
             ? RAIN_URL 
             : info.temp > 15
             ? HOT_URL
             : COLD_URL
            }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80
             ? <ThunderstormIcon/>
             : info.temp > 15
             ? < WbSunnyIcon/>
             : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component = {"span"}>
         <p>Temprature ={info.temp}&deg;C</p>
         <p>Humidity ={info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C </p>
         <p>Max Temp = {info.tempMax}&deg;C </p>
         <p>The weather can be described as <i>{info.weather}</i> and feelslike {""}
            {info.feelslike}&deg;C </p>
        </Typography>
      </CardContent>
     
    </Card>
  
     </div>
    </div>
);
}