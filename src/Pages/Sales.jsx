import React from 'react'
import { Cards } from '../Components/Cards'
import { Header } from '../Components/Header'
import { Rightnavbar } from '../Components/Rightnavbar'
import Shopify from '../Images/Shopify.png'
import zidcj from '../Images/zidcj.png'
import WooCommerce from '../Images/WooCommerce.png'
import Amazon from '../Images/amazon.png'
import eldokan from '../Images/eldokan.png'
import Panda from '../Images/Panda.png'

export const Sales = () => {
const images=[Shopify,zidcj,WooCommerce,Amazon,eldokan,Panda]
  return (
    <div style={{width:"100%",marginTop:"26px"}}>
        <div style={{marginLeft:"10px",fontSize:"16px",fontWeight:500,color:"#222222",width:"159",height:"20px",lineHeight:1}}>Sales Channel Apps</div>
        <Rightnavbar/>
        <Header sales={"Sales Channels"}/>
            <Cards arr={images}/>
        <Header sales={"Market Places"}/>
            <Cards arr={images}/>
    </div>
  )
}
