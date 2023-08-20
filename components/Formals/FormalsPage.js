import React from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice/CartSlice";

const FormalsPage = ({ data }) => {

  const dispatch = useDispatch()
  const addCart = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div class="h-screen w-auto bg-page-color pt-16">
      {<Header />}
      <div>
        <h1 class="h-18 w-96 text-center mt-10 ml-auto mr-auto text-3xl">
          Formal Collections
        </h1>
        <div class="grid grid-cols-4 gap-10">
          {data.map((item) => (
            <div class="h-44 w-44 mt-16 ml-auto mr-auto " key={item.id}>
              <img class='hover:scale-95' src={item.image} alt="product1" />
              <h1 class="text-xl">{item.type}</h1>
              <p class="text-sm">{item.description}</p>
              <p class="text-m">₹{item.price}</p>
              <button class='w-28 h-6 mt-3 bg-lime-400 rounded-lg' onClick={() => addCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FormalsPage;
