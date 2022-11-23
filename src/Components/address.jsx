import React from 'react'
import { getTimeNow } from '../Utilities/index'
function AddressTab({location}) {
  return (
    <div className='address-tab'>
        <div className='city'>
            <strong>{location !== null ? location.name : '?'}</strong>
            <span>{location !== null ? location.admin1 +', '+location.country : '?'}</span>
        </div>

        <div className='time'>
            {getTimeNow()}
        </div>
    </div>
  )
}

export default AddressTab