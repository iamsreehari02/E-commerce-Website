import React, { useState } from 'react'
// import SeasonalLogo from '../../assets/SeasonalLogo'
import Seasonal from './Seasonal'



export default function SeasonalPage() {
  
  const [seasonalData , onChange] = useState([
    {'id' : '1' , 'image' : '../../assets/SeasonalLogo' },
  ])

  return (
    <div>
        <Seasonal data={seasonalData}/>
    </div>
  )
}
