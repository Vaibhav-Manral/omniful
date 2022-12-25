import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { HiOutlineTruck } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { TbFreeRights } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import {Link} from "react-router-dom"
export function List() {
  const [open, setOpen] = useState(false);
  const [change, setchange] = useState();

  // const [use, setuse] = useState(true);

  const trig = (i) => {
    setchange(i)
    // console.log("a",open)
    setOpen(!open)
    // console.log("b",open)

  }
  
  const obj = [
    {
      name: "Apps And Integration",
      services: ["Sales Channel Apps", "Shipping Apps", "Pos Apps", "ERP Apps","SMS"]
    },
    {
      name: "Omniful App Setting",
      services: ["Picker Apps", "Driver Apps", "Put-Away & Apps"]
    },
    {
      name: "Hub Management",
      services: ["Hubs","Location", "Bins", "Consolidation area", "Stations","Hub settings"]
    },

  ]

  const styles = {
    backgroundColor: "white",
    width: "100%",
    // border: "1px solid red",
  }

  const button = {
    backgroundColor: "white",
    color: "#333333",
    width: "100%",
    display: "flex",
    alignItems:"center",
    position: "relative",
    gap: "3%",
    // border: "1px solid green",
    marginTop: "20px",
    fontSize:"15px",
    fontWeight:"500",
    lineHeight:1,
    cursor:"pointer"
  }

  const service = {
    // border: "1px solid red",
    textAlign: "center",
    height: "40px",
    marginTop:"10px",
    // backgroundColor:use?"white":"#5468FA0F",
    display:"flex",
    paddingLeft:"35px",
    alignItems:"center",
    gap:"5%",
    color:"#333333",
    cursor:"pointer",
    lineHeight:1
  }

  const text={
    textDecoration: 'none',
    fontSize:"14px",
    fontWeight:"600",
  }
  
  return (
    <>
      {
        obj.map((el, i) => {
          return (
            <>
              <div key={i}
                onClick={() => trig(i)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={button}
              >
                <div>
                  <HiOutlineTruck style={{marginLeft:"10px"}}/>
                </div>
                <div>{el.name}</div>
                <div style={{ position: "absolute", right: "10px" }}>
                  <div>{change == i && open ? <MdKeyboardArrowUp  /> : <MdKeyboardArrowDown />}</div>
                </div>
              </div>
              <Collapse in={change == i ? open : false}>
                <div key={i} style={styles}>
                  {
                    el.services.map((el, i) => {
                      return (
                        <Link style={text} to={el}>
                        <div key={i} style={service}>
                          <div>
                            <HiOutlineTruck />
                          </div>
                         <div> {el}</div>
                        </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </Collapse>
            </>
          )
        })
      }
    </>
  );
}
