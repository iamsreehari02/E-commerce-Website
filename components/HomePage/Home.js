import React from 'react'
import { useState } from 'react'
import Product1 from '../../assets/Product1.svg'
import Product2 from '../../assets/Product2.svg'
import Product3 from '../../assets/Product3.svg'
import Product4 from '../../assets/Product4.svg'
import ProductList from '../ProductList/ProductList'
import MensWear from '../MensWear/MensWear'
import Category from '../Category/Category'
import WomenWear from '../WomenWear/WomenWear'
import Header from '../Header/Header'




export default function Home() {
  

  const [categoryData, catChange] = useState([
    {'id' : '1' , 'name' : 'Formals' , 'direct' : '/FormalsPage'},
    {'id' : '2', 'name' : 'Casuals', 'direct' : '/CasualsPage' },
    {'id' : '3' , 'name' : 'Seasonal', 'direct' : '/SeasonalPage' },
    {'id' : '4' , 'name' : 'Men' , 'direct' : MensWear},
    {'id' : '5' , 'name' : 'Women' , 'direct' : WomenWear}
    

  ])



  const [productData, change] = useState([
    { 'id' : '1' , 'image': Product1 , 'type' :'Men Closed' , 'description' : 'Dark blue'},
    { 'id' : '2' , 'image': Product2 , 'type' : 'Overshirt' , 'description' : 'Browniess'},
    { 'id' : '3' , 'image': Product3 , 'type' : 'Mngo Out Wear' , 'description' : 'Men'},
    { 'id' : '4' , 'image': Product4 , 'type' : 'Hem Blouse', 'description' : 'Single Breasted Ruffle'},
    
  ])


  return (
    <div class='h-screen w-screen bg-page-color pt-16'>
      <div>
        {<Header/>}
      </div>
        <div class='h-52 w-4/5 ml-auto mr-auto flex'>
          <div class='h-32 w-1/2 text-center align-middle mt-14'>
            <h1 class='text-6xl'>Fashion Trends</h1>
            <h1 class='text-2xl'>Get Our Latest Collections</h1>
          </div>
          <Category data={categoryData}/>
        </div>
        <div>
          <ProductList data={productData} />
        </div>
       
        
    </div>
  )
}
