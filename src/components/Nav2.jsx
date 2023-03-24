import React from 'react'
import "./index.css"
import group from "../assets/group.png"
import Path from "../assets/Path.png"

const Nav2 = () => {
  return (
    <div className='border-b'>
        <ul className='d-flex flex-row justify-content-between'>
      <ul className="d-flex flex-row gap-3  ">
        <li>All Posts(32)</li>
        <li className='gray'>Article</li>
        <li className='gray'>Event</li>
        <li className='gray'>Education</li>
        <li className='gray'>Job</li>
      </ul>
      <ul className="d-flex flex-row space-around gap-3">
      <li className='btn btn-light'><button type="button" class="btn ">Write a Post</button> 
      <img src={Path} />
      </li>
      <li className='d-flex flex-row btn btn-primary'><button type="button" className="btn btn-primary">Join Group</button>
      <img src={group} style={{ height: "1rem", textAlign: "center", justifyContent: "center", margin: "10px"}} />
      </li>
      </ul>
        </ul>
    </div>
  )
}

export default Nav2