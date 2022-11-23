import React from 'react'
import { WiDayCloudyGusts , WiHumidity  , WiCloudDown } from 'react-icons/wi'
import { isEmpty } from '../Utilities'

function GroupIcon({data}) {
  return (
    <div className='group-icon'>
        <div className='info'>
            <WiDayCloudyGusts className='icon'/>
            <label>{isEmpty(data) ? '?' :  data.wind.speed} m/h</label>
        </div>

        <div className='info'>
            <WiHumidity className='icon'/>
            <label>{isEmpty(data) ? '?' : data.main.humidity}%</label>
        </div>

        <div className='info'>
            <WiCloudDown className='icon'/>
            <label>{isEmpty(data) ? '?' :data.main.pressure} pa</label>
        </div>
    </div>
  )
}

export default GroupIcon