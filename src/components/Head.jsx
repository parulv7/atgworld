import React from 'react'
import back from '../assets/back.png'
import arrow from "../assets/arrow.png"
const Head = () => {
  return (
    <div>
      <span>
      <img className='head w-100 w-full .bg-image linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%) ' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)"}} src={back}/></span>
   
   
   <div className='head_0 postion-absolute top-0 start-0 translate-middle d-flex flex-row'> <img 
   style={{height: "5rem"
   }}
   onScroll={arrow}/> 
   <button type="button" class="f_1 btn btn-outline-secondary">Secondary</button> </div>


    <div className=' main_1 position-absolute   text-white mx-2 translate-middle color-white d-flex flex-column justify-content-center align-items-center '>
      <div className=' main_11 display-6 h3'>Computer Engineering</div>
      <div className='lead'>142,765 Computer Engineers follow this</div>
    </div>
    </div>
  )
}

export default Head