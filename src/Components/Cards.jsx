import React, { useState } from 'react'
import "./cards.css"
import shopify from '../Images/Shopify.png'

export const Cards = (p) => {
 const[logo,setlogo]=useState(p.arr)
//  console.log(logo)
  return (
    <div className='_Cardsmain'>
{
logo.map((el,i)=>{
    return(
    <div key={i} className='_cardsmaindiv'>
        <div>Active</div>
        <div><img src={el}/></div>
        <div>Custom Name</div>
        <div>Name</div>
    </div>
    )
})
}
</div>

  )
}
