import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
  } from '../constants/weather';

  const getWeather = (weather) => {
    console.log('recibo', weather)
   
    if ( weather < 300 ){
      return THUNDER
    } else if(weather < 400){
      return DRIZZLE;
    } else if(weather < 600){
      return RAIN;
    } else if(weather < 700){
      return SNOW;
    } else if(weather === 800){
      return SUN;
    } else {
      return CLOUD;
    }
  };

  export default getWeather;