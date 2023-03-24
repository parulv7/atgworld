import React from 'react'
import loc from "../assets/lock.png"
import edit from "../assets/edit.png"
import error from "../assets/error.png" 
const Right = () => {
  return (
    <div className='m-5 d-flex flex-column gap-3'>
        <span className='d-flex flex-row gap-5 p-2' style={{borderBottom: "1px solid  #E5E5E5"}}>
            <div> <img src={loc} /> Noida, India </div>
            <div><img src={edit}/> </div>
        </span>
        <span className='d-flex flex-row px-10 py-2 gap-3'>
            <div><img src={error}/> </div>
            <div className='text-muted ' style={{fontSize: "12px"}}>Your location will help us serve better and extend a personalised experience.</div>
        </span>
    </div>
  )
}

export default Right