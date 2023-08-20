import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { addItem } from '../CartSlice/CartSlice'
const ProductList = ({ data }) => {
    // console.log(data)

    const dispatch = useDispatch()
    const addProducts = (item) =>{
        dispatch(addItem(item))
        
    }
    return (
    <div>
        <div class='h-44 w-4/5 mt-12 ml-auto mr-auto grid grid-cols-4 gap-40'>
            {data.map((item)=>(
                <div class = 'h-44 w-auto' key={item.id}>
                    <img class='hover:scale-95' src={item.image} alt='Product'/>
                    <h1 class='text-xl'>{item.type}</h1>
                    <p class='text-sm'>{item.description}</p>
                    <p class='text-m'>₹{item.price}</p>
                    <button class='w-28 h-6 mt-3 bg-lime-400 rounded-lg' onClick={() => addProducts(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
    )
}
export default ProductList