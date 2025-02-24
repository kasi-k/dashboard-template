import React from 'react'
import { useNavigate } from 'react-router-dom'

const OnlineEnquiry = () => {

 const navigate = useNavigate();

  const handleView = ()=>{
    navigate("view");
  }
  return (
    <>
    <div>OnlineEnquiry</div>
    <div onClick={handleView} className='underline underline-offset-1 text-blue-700 cursor-pointer'>View</div>
    </>
  )
}

export default OnlineEnquiry