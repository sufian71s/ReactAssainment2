import React from 'react'
import { Link } from 'react-router-dom';

function NewIncident2() {
  return (
    <>

<div className='flex justify-between py-3  px-5 bg-[#E4E4E780]'>
<div className='md:px-8 px-2 md:text-[15px]   text-[12px] text-start'>
  <p>Home - Incidents - New Incident</p>
  <h1 className='md:text-[24px] font-sans font-bold'>New Incident</h1>
</div>

<div className='flex gap-2 items-center justify-center '>
<button className='md:p-2 px-3 p-2 bg-white text-black rounded-md'>
 <Link to="/Incidents2">Back</Link></button>
<button className='md:p-2 px-3 p-2 bg-[#F26922] text-white md:   rounded-md md:px-4'>
     <Link to="/Incidents4">Next </Link> </button>

</div>
</div>

    <section className='w-full'>
      <div className=' w-[90%] md:w-[60%] mx-auto py-5 '>
      <h1 className='md:text-3xl text-xl font-bold py-3'>Let’s give the incident a title?</h1>
      <p className='text-gray-500 py-6 text-[9px] md:text-[16px]'>Make a title that will easily identify the incidents</p>
      <input className='py-4 px-3 bg-[#F4F4F5] rounded-2xl outline-none border-2 border-gray-300 w-full' type="text" placeholder='Add title here' />
      <h1 className='font-bold text-xl md:text-3xl py-4'>Describe what happened during the incident?</h1>
      <p className='text-gray-500 py-6 text-[9px] md:text-[16px]'>Share some information about the incident. The when, where, how. </p>
      <textarea className='w-full min-h-9 bg-[#F4F4F5] px-3 py-10 rounded-2xl' name="" id="" placeholder='Type here'></textarea>
      </div>
    </section>
    </>
  )
}

export default NewIncident2