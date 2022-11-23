import React, { useEffect, useState } from 'react'
import AddressTab from './address'
import {WiDayRain , WiSunrise , WiSunset} from 'react-icons/wi'
import TempTab from './temp'
import GroupIcon from './groupicon'
import SunCard from './suncard'
import DaysInfo from './daysinfo'
import { isEmpty , getTime} from '../Utilities'

function SideView({loc , setLoc}) {

  const [weather , setWeather] = useState({})
  
  useEffect( ()=>{
    const  getData = async ()=>{
      
      //  localStorage.removeItem('location')
      // console.log(JSON.parse(localStorage.getItem("location")))
      if(loc == null){
        console.log("No Location is selected")
      }else{
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.latitude}&lon=${loc.longitude}&appid=e8aee200f44db78402a473be6af7aff1`)
      .then((res) => res.json())
      .then((data)=> setWeather(data))
      .catch((e)=> console.log(e))
      }
      
    }


    getData()
    // console.log(weather)
    
    
  },[loc])



  

  return (
    <div className='side-view'>
        <AddressTab location={JSON.parse(localStorage.getItem("location"))} />

        <DaysInfo icon={weather.weather} />

        <TempTab data={weather}/>
        <GroupIcon data={weather} />
        
        <SunCard icon={WiSunrise} title="Sunrise" time={isEmpty(weather) ? '?' : getTime(weather.sys.sunrise)} timestamp="2 Days Ago" />
        <SunCard icon={WiSunset} title="Sunset" time={isEmpty(weather) ? '?' : getTime(weather.sys.sunset)} timestamp="1 Hour Ago" />
    </div>
  )
}

export default SideView