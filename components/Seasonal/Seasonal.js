
import React from 'react'
import Header from '../Header/Header'

    const Seasonal=({data})=>  {

  return (
    <div class='h-screen w-screen pt-bg-page-color'>
        <div>
            {<Header/>}
        </div>
        <div>
        {data.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt='Logo'/>
                <button class='w-28 h-6 mt-3 bg-lime-400 rounded-lg'>Add to Cart</button>
            </div>
        ))}
        </div>
    </div>
    
  )
}
export default Seasonal

