import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./box_info.css";
export default function Info_box({Info}){
 const Cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    
 const Hot_url="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 const Rainy_url="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
 
    return(<div className="box-info">
        <div className="card">
        <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={Info.Humidity>80 ? Rainy_url : Info.temperature <15 ?Cold_url :Hot_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.City}  {Info.Humidity>80 ? <ThunderstormIcon/> : Info.temperature <15 ? <AcUnitIcon/>:<WbSunnyIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature= {Info.temperature}&deg;C</p>
         <p>Humidity= {Info.Humidity} </p>
         <p>Pressure= {Info.Pressure}</p>
         <p>Temperature max={Info.temperature_max}&deg;C</p>
         <p>Temperature min={Info.temperature_min}&deg;C</p>
         <p>Wind Speed={Info.Wind_speed}km/hr</p>
         <p>Weather feels like <i>{Info.weather}</i></p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}