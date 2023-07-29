import React from "react";
import Header from "../Header/Header";

const FormalsPage = ({ data }) => {
  return (
    <div class="h-screen w-auto bg-page-color pt-16">
      {<Header />}
      <div>
        <h1 class="h-18 w-96 text-center mt-10 ml-auto mr-auto text-3xl">
          Formal Collections
        </h1>
        <div class=" flex justify-between">
          {data.map((item) => (
            <div class="h-44 w-44 mt-16 ml-auto mr-auto" key={item.id}>
              <img src={item.image} alt="product1" />
              <h1 class="text-xl">{item.type}</h1>
              <p class="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FormalsPage;
