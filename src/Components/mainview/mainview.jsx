import React, { useEffect, useState } from 'react'
import SearchBar from './searchbar'
import './index.css'
import WeatherCard from './weathercard'

function MainView({loc , setLoc}) {


  const [weather , setWeather] = useState([])
  const [daily ,setDaily] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      if(loc == null){
        console.log("No Location is selected")
      }else{
       fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&hourly=temperature_2m`)
      .then((res) => res.json())
      .then((data)=> setDailyWeather(data.hourly))
      .catch((e)=> console.log(e))
      }
    }
    getData()

    const setDailyWeather = (data)=>{
      var time = data.time
      var temp = data.temperature_2m
      var arr = []
      
      for(var i =0;i<temp.length;i+=24){
        console.log(time[i] , temp[i])
        arr.push({time: time[i] , temp:temp[i] ,})
      }
      setDaily(arr)
    }
  },[])

  
  return (
    <div className='main-view'>
      <SearchBar loc={loc} setLoc={setLoc}/>
    {/* Card View */}
      <div className='card-view'>
        {daily.length === 0 ?  '' : (
        <>
        <WeatherCard loc={loc} data={daily[1]} />
        <WeatherCard loc={loc} data={daily[2]}/>
        <WeatherCard loc={loc} data={daily[3]}/>
        <WeatherCard loc={loc} data={daily[4]}/>
        <WeatherCard loc={loc} data={daily[5]}/>
        <WeatherCard loc={loc} data={daily[6]}/>
        </>)}
      </div>
    </div>
  )
}

export default MainView