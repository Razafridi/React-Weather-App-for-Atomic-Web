import React from 'react'
function SunCard(props) {
  return (
    <div  className='sun-card'>
        <div className='icon'>
            <props.icon />
        </div>
        <div className='info'>
            <label>{props.title}</label>
            <strong>{props.time}</strong>
        </div>
        <div className='time'>
            <label>{props.timestamp}</label>
        </div>
    </div>
  )
}

export default SunCard