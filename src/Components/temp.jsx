import React from 'react'
import { isEmpty } from '../Utilities'

function TempTab({data}) {
  return (
    <div className='temp-info'>
        <div className='temp'>
            <strong >{ isEmpty(data) ?'?' :  Math.floor(data.main.temp - 273.15)  }</strong>
            <sup>&deg;C</sup>
        </div>

        <div className='desc'>
            <span>Feels Like {isEmpty(data) ? '?' :Math.floor(data.main.feels_like - 273.15)}</span>
        </div>
    </div>
  )
}

export default TempTab