import React, { useState } from 'react'
import MainView from './Components/mainview/mainview'
import SideView from './Components/sideview'

function App() {
  const [loc , setLoc] = useState(JSON.parse(localStorage.getItem('location')))
  return (
    <div className='app'>
      <MainView loc={loc} setLoc={setLoc} />
      <SideView loc={loc} setLoc={setLoc} />
    </div>
  )
}

export default App