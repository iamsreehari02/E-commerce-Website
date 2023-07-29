import React from "react";
import { Navigate, useHref, useNavigate } from "react-router-dom";
import FormalsPage from "../Formals/FormalsPage";


const Category=({data}) => {
    // console.log(data)
    
    const navigate= useNavigate()

    const handleClick = (itemLink) => {
        navigate(itemLink)
        
    }
    return(
        <div class='h-44 w-2/3 ml-10 flex justify-between mt-14'>
            {data.map((item)=>(
                
                <div class='h-12 w-18' key={item.link}>
                    
                        <button onClick={()=>handleClick(item.link)} class='h-10 w-28 ml-auto mr-auto bg-light-pink mt-10 rounded-2xl'>{item.id}</button>
                </div>
            ))}
            
        </div>
    )
}

export default Category