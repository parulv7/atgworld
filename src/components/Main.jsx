import React from 'react'
import Nav2 from './Nav2'
import "./index.css"
import share from "../assets/Vector.png"
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import dot from "../assets/dot.png"
import art from "../assets/Article.png"
import p1 from "../assets/p-1.png"
import p2 from "../assets/p-2.png"
import p3 from "../assets/p-3.png"
import watch from "../assets/watch.png"
import edu from "../assets/edu.png"
import meet from "../assets/meet.png"
import Right from './Right'
import stick from "../assets/stick.png"
import "../index.css"
const Main = () => {
  return (
    <>
    <div className='main_c my-5 mx-5'>   


         <Nav2/>
         <div className='d-flex bd-highlight'>
         {/* left */}

         
{/* first */}
<div className='d-flex flex-column gap-0'>

            <span  className='card_  px-2 py-0 w-100 bd-highlight'>
            <div className="card mx-5 my-5" style={{width: "37rem", height: "28rem"}}>
  <img src={c1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <img src={art} className="card-title"/>
    <div className='d-flex flex-column gap-5 mx-2'>
    <div className='d-flex flex-row justify-content-between ' style={{height: "1.3rem"}}>
    <p className="card-text my-2">
    What if famous brands had regular fonts? Meet RegulaBrands!</p>
    <img src={dot} />
    </div>
    <p className='text-muted'>I’ve worked in UX for the better part of a decade.From now on, I plan to rei…</p>
</div>
{/* profile */}



    <span className='d-flex flex-row justify-content-between' >
        <span className='d-flex flex-row gap-3'>
        <img src={p1}/>
            <div className='p-1' style={
      {fontWeight: "bolder", width: "10rem"}
   }> Sarthak Kamra</div>
           
        </span>
        <span className='d-flex flex-row gap-5'>
        <div className='d-flex flex-row '><img className='m-1' src={watch} style={{ height: "1.2rem"}}/> <p>1.4k views</p> </div>
            <div className='btn btn-light px-2 py-1'> <img src={share} style={{ height: "1rem"}} /> </div>
        </span>
    </span>
  </div>
</div>
            </span>

{/* second */}
<span  className='card_ mx-2 w-100 bd-highlight'>
            <div className="card mx-5 my-5" style={{width: "37rem", height: "28rem"}}>
  <img src={c2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <img src={edu} className="card-title"/>
    <div className='d-flex flex-column gap-5 mx-2'>
    <div className='d-flex flex-row justify-content-between ' style={{height: "1.3rem"}}>
    <p className="card-text my-2">
    Tax Benefits for Investment under National Pension Scheme launched by Government</p>
    <img src={dot} />
    </div>
    <p className='text-muted'>I’ve worked in UX for the better part of a decade.From now on, I plan to rei…</p>
</div>
{/* profile */}



    <span className='d-flex flex-row justify-content-between' >
        <span className='d-flex flex-row gap-3'>
        <img src={p2}/>
            <div className='p-1' style={
      {fontWeight: "bolder", width: "10rem"}
   }> Sarah West</div>
           
        </span>
        <span className='d-flex flex-row gap-5'>
        <div className='d-flex flex-row '><img className='m-1' src={watch} style={{ height: "1.2rem"}}/> <p>1.4k views</p> </div>
            <div className='btn btn-light px-2 py-1'> <img src={share} style={{ height: "1rem"}} /> </div>
        </span>
    </span>
  </div>
</div>
            </span>

{/* third */}


<span  className='card_ mx-2 w-100 bd-highlight'>
            <div className="card mx-5 my-5" style={{width: "37rem", height: "28rem"}}>
  <img src={c3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <img src={meet} className="card-title"/>
    <div className='d-flex flex-column gap-5 mx-2'>
    <div className='d-flex flex-row justify-content-between ' style={{height: "1.3rem"}}>
    <p className="card-text my-2">
    What if famous brands had regular fonts? Meet RegulaBrands!</p>
    <img src={dot} />
    </div>
    <p className='text-muted'>I’ve worked in UX for the better part of a decade.From now on, I plan to rei…</p>
</div>
{/* profile */}



    <span className='d-flex flex-row justify-content-between' >
        <span className='d-flex flex-row gap-3'>
        <img src={p3}/>
            <div className='p-1' style={
      {fontWeight: "bolder", width: "10rem"}
   }> Sarthak Kamra</div>
           
        </span>
        <span className='d-flex flex-row gap-5'>
        <div className='d-flex flex-row '><img className='m-1' src={watch} style={{ height: "1.2rem"}}/> <p>1.4k views</p> </div>
            <div className='btn btn-light px-2 py-1'> <img src={share} style={{ height: "1rem"}} /> </div>
        </span>
    </span>
  </div>
</div>
            </span>


</div>



            {/* right */}
            <span className='mx56 p-2 flex-shrink-1 bd-highlight'>
              <Right/>
            </span>
         </div>
         <div className='stick top-100 start-100 translate-middle position-fixed '>
          <img src={stick}/>
         </div>
    </div>

    </>
  )
}

export default Main