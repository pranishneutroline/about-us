import React from 'react'
import {FaRegEye,FaRegPaperPlane,FaRegClock} from "react-icons/fa"

import "./vision.css"
function Vision() {
  return (
    <>
     <div className="fourth p-5">
     <div className="box1">
     <FaRegEye className='vision' />
     <h4>Vision</h4>
     </div>
     <div className="box1">
     <FaRegPaperPlane className="vision" />
     <h4>Mission</h4>
     </div>
     <div className="box1 ">
     <FaRegClock className="vision" />
     <h4>History</h4>
     </div>
      

     <div className="box4 p-2">
     <div className="content">
     <h3 className='mt-4'>Vision</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consequatur doloremque nihil aperiam facilis quisquam quis repellat, explicabo laborum debitis blanditiis? Aliquid quasi modi at natus iusto recusandae autem iure.</p>
     </div>
     <div className="image"><img src="/images/vision.jpg" alt="" /></div>
     </div>
    </div>
    </>
  )
}

export default Vision