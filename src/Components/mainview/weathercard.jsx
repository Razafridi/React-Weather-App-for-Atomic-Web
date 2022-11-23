import React, { useEffect, useState } from 'react'
import { BsCloud } from 'react-icons/bs'
import { getDate } from '../../Utilities'
import { TbTrendingDown3 , TbTrendingUp3} from 'react-icons/tb'
function WeatherCard({data , loc}) {
  const [temp , setTemp ] = useState(0)
  useEffect(()=>{
    if(loc == null){
      console.log("No Location is selected")
    }else{
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.latitude}&lon=${loc.longitude}&appid=e8aee200f44db78402a473be6af7aff1`)
    .then((res) => res.json())
    .then((data)=> setTemp(data.main.temp -  273.15))
    .catch((e)=> console.log(e))
    }
  },[loc])
  return (
    <div className='weather-card'>
        <div className='icon'>
            {temp > data.temp ? <TbTrendingDown3 className='red' /> : <TbTrendingUp3 className='green'/>}
        </div>

        <div className='info'>
            <strong>{getDate(data.time)}</strong>
            <p>{data.temp} &deg;C</p>
        </div>
    </div>
  )
}

export default WeatherCard