import React from 'react'

const ProductList = ({ data }) => {
    // console.log(data)
    return (
    <div>
        <div class='h-44 w-4/5 mt-12 ml-auto mr-auto flex justify-between'>
            {data.map((item)=>(
                <div class = 'h-44 w-auto' key={item.id}>
                    <img src={item.image} alt='Product'/>
                    <h1 class='text-xl'>{item.type}</h1>
                    <p class='text-sm'>{item.description}</p>
                    <button class='w-28 h-6 mt-3 bg-lime-400 rounded-lg'>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
    )
}
export default ProductList