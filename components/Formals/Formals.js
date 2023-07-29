import FormalsPage from './FormalsPage';
import React from 'react'
import FormalsProduct1 from '../../assets/Formals-1.svg'
import FormalsProduct2 from '../../assets/Formals-2.svg'

import { useState } from 'react';

export default function Formals() {

    const [formalsData, onChange] = useState([
        {'id' : 'Formals1' , 'image': FormalsProduct1 , 'type' : 'Mssimo Dutti' , 'description' : 'Long Sleev Shirt'},
        {'id' : 'Formals2' , 'image': FormalsProduct2 , 'type' : 'Mssimo Dutti' , 'description' : 'Long Sleev Shirt'},
    ])

  return (
    <div>
      <FormalsPage data={formalsData}/>
    </div>
  )
}
