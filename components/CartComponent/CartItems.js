import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import { removeItem, clearCart } from '../CartSlice/CartSlice'

export default function Cart() {

    const data = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const removeProducts =(item) => {
      dispatch(removeItem(item))
    }

    const totalAmount = data.reduce((amount , item) => amount + item.price, 0)

    const clearCartPage = () => {
      dispatch(clearCart())
    }

  return (
    <div class='pt-10 h-screen'>
      <Header/>
            <div class='h-44 w-4/5 mt-20 ml-auto mr-auto'>
              <div class='w-96 h-28 bg-white border shadow-xl mx-auto pt-4'>
                  <p class='ml-20 '>Total Amount for ({data.length})items: ₹{totalAmount}</p>
                  <button class='w-28 h-6 bg-black text-white text-l rounded-lg ml-32 mt-4' 
                  onClick={() => clearCartPage()}>Clear Cart</button>
              </div>
              <div class='mt-9 grid grid-cols-3 gap-10'>
              {data.map((item)=>(
                  <div class="w-auto mt-6 border border-slate-300 shadow-2xl flex  rounded-lg hover:scale-95 " key={item.id}>
                      <img class='w-36' src={item.image} alt='Product'/>
                      <div class='ml-4'>
                        <h1 class='text-xl'>{item.type}</h1>
                        <p class='text-sm'>{item.description}</p>
                        <p class='text-m'>₹{item.price}</p>
                        <button onClick={() => removeProducts(item)} class='mt-20 w-40 h-6 bg-yellow-100 rounded-lg'>Remove from Cart</button>
                      </div>
                    </div>
              ))}
              </div>
        </div>
      </div>
  )
}
