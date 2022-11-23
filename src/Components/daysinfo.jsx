import React from 'react'
import { WiDayRain } from 'react-icons/wi'
import { getDateNow } from '../Utilities'
function DaysInfo() {
  return (
    <div className='day'>
            <div className='icon'>
                <WiDayRain />
            </div>

            <div className='day-info'>
                <strong>Today</strong>
                <span>{getDateNow()}</span>
            </div>
        </div>
  )
}

export default DaysInfo