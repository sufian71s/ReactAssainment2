import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from 'react-router-dom';

function NewIncident() {
  const [state, setState] = useState(null);
  const handle =(index)=>{
  setState(index)
  }
  const gridItem = [

    {
         img:"/1 (1).png",
         title:"Avalanche"
    },
  
    {
         img:"1 (2).png",
         title:"Biological"
    },
  
    {
         img:"1 (3).png",
         title:"Blizzard"
    },
  
    {
         img:"1 (4).png",
         title:"Cold/Freezing"
    },
  
    {
         img:"1 (5).png",
         title:"Drought"
    },
  
    {
         img:"1 (6).png",
         title:"Earthquake"
    },
  
    {
         img:"1 (7).png",
         title:"Flooding"
    },
  
    {
         img:"1 (8).png",
         title:"Heat Wave"
    },
  
    {
         img:"1 (9).png",
         title:"Hail"
    },
  
    {
         img:"1 (10).png",
         title:"Lightning"
    },
  
    {
         img:"1 (11).png",
         title:"Man Made"
    },
  
    {
         img:"1 (12).png",
         title:"Mudslide"
    },
  
    {
         img:"1 (13).png",
         title:"Severe Storm"
    },
  
    {
         img:"1 (14).png",
         title:"Strong Wind"
    },
  
    {
         img:"1 (15).png",
         title:"Tornado"
    },
  
    {
         img:"1 (16).png",
         title:"Tsunami"
    },
  
    {
         img:"1 (7).png",
         title:"Volcanic Eruption"
    },
  
    {
         img:"1 (4).png",
         title:"Volcanic Eruption"
    },
  
  ]
  return (

    <>

{/* Search button */}


<div className='flex justify-between py-3  px-5 bg-[#E4E4E780]'>
<div className='md:px-8 md:text-[16px] text-[12px] px-2  text-start'>
  <p>Home - Incidents - New Incident</p>
  <h1 className='md:text-[24px] font-sans font-bold'>New Incident</h1>
</div>

<div className='flex gap-2 items-center justify-center '>
<button className='p-2  bg-white text-black rounded-md px-4'>
       <Link to="/Incidents">Back</Link></button>
<button className='p-2 bg-[#F26922] text-white rounded-md px-4 '>
     <Link to="/Incidents3">Next </Link> </button>

</div>
</div>




















    <section className='w-full '>
      <div className='w-[90%] md:w-[60%] flex flex-col mx-auto py-8 px-3'>
        <h1 className='font-bold text-2xl '>Which of these best describes the incident?</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2  mt-5">
            {gridItem.map((event,indexing)=>(
                <div onClick={()=>handle(indexing)} key={indexing} className={` ${state===indexing ? " text-white bg-[#F26922]" :"bg-[#F4F4F5] text-gray-600"} p-2 flex gap-2 py-3 px-4 cursor-pointer items-center bg-[#F4F4F5] rounded-2xl`}>
                    <img src={event.img} alt=" icon" />
                  
                      <h2>{event.title}</h2>

                  

                </div>
            ))}

          </div>
      </div>
    </section>
    </>
  )
}

export default NewIncident