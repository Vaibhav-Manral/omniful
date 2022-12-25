import React, { useState } from 'react'

export const Rightnavbar = () => {
const options=["Integrated","All Channels","Coming Soon"];
const [trig,settrig]=useState(false);
const [num,setnum]=useState();



const styles={
  display:"flex",
  // border:"1px solid red",
  gap:"2%"
}
const opt={
  // border:"1px solid blue",
  display:"flex",
  justifyContent:"center",
  width:"126px",
  height:"30px",
  alignItems:"center",
  fontSize:"12px",
  fontWeight:"500",
  cursor:"pointer",
  // borderBottom:trig?"1px solid #5468FA":""
}
// const change=(i)=>{
//   setnum(i)
//   if(num==i){
//   settrig(!trig)
//   }
//   }
  return (
    <div style={styles}>
        {
            options.map((el,i)=>{
                return(
                    <div style={opt}>
                           <div > {el}</div>
                    </div>
                        )            
                    })
        }
    </div>
  )

}
