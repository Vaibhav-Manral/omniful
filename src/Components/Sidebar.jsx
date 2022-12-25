import React, { useState } from 'react';
import './Sidebar.css';
import omniful from '../Images/sidebaricons/omniful.png'
import {AiOutlineSetting} from 'react-icons/ai'
import {CiWallet} from 'react-icons/ci'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {BiStats} from 'react-icons/bi'
import {RxTrash} from 'react-icons/rx'
import {FaShapes} from 'react-icons/fa'
import {MdPeopleOutline} from 'react-icons/md'
import {CgSearchFound} from 'react-icons/cg'
import {RxQuestionMarkCircled} from 'react-icons/rx'
import {MdSendToMobile} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import { Sales } from '../Pages/Sales';
import {Routes,Route} from "react-router-dom"
// import { InnerSidebar } from './InnerSidebar';

export const Sidebar = (p) => {

    const  [change,setchange]=useState();

    const trig=(i)=>{
        setchange(i)
    }

    const icons=[omniful,
    <BiHomeAlt/>,<AiOutlineDollarCircle/>, <BiStats/>, <RxTrash/>,
    <TbTruckDelivery/>, <FaShapes/>, <CiWallet/>,<AiOutlineSetting/>,
    <MdPeopleOutline/>, <CgSearchFound/>,   <RxQuestionMarkCircled/>,<MdSendToMobile/>
]

  return (
    <div className='_Sidebardiv'>
    <div className='_Sidebarmaindiv'>
{
    icons.map((el,i)=>{
        if(el==omniful){
            return(
            <div onClick={()=>{trig(el, i)}} key={i} className={change===i?"_icondiv":"_icondiv1"}>
                <div>
                    <img src={el}/>
                </div>
            </div>
            )
        }
        else{
            return(
        <div onClick={()=>{trig(i)}} key={i} className={change===i?"_icondiv":"_icondiv1"}>
            <div >
                {el}
            </div>
        </div>
            )
    }
    })
}  
</div>
{p.innersidebar}
<div style={{width:"100%"}}>
<Routes>
      <Route path={"/Sales Channel Apps"} element={<Sales/>}></Route>
</Routes>
</div>
    </div>
  )
}
