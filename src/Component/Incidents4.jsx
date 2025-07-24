import React from 'react'
import { Link } from 'react-router-dom';

function Incidents4() {
  return (
    <>
<div className='flex justify-between py-3  px-5 bg-[#E4E4E780]'>
<div className='md:px-8 px-2  text-start'>
  <p className='md:text-[16px] text-[12px]'>Home - Incidents - New Incident</p>
  <h1 className='md:text-[24px] font-sans font-bold'>New Incident</h1>
</div>

<div className='flex gap-2 items-center justify-center '>
<button className='p-2 bg-white text-black rounded-md px-4'>
     <Link to="/Incidents3">Back</Link></button>
<button className='p-2 bg-[#F26922] text-white rounded-md px-4'>
   <Link to="/Finised">Finised</Link></button> 

</div>
</div>

<div className="flex items-center justify-center md:min-h-screen mt-6 ">
  <div className="">
  <h1 className='md:text-[2rem] font-bold text-start'>Where’s the incident?</h1>
  <p className='text-start'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click: Wide</p>
  <img src="/map1.png" alt="" />
</div></div>



      
    </>
  )
}

export default Incidents4
