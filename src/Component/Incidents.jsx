import React from 'react'
import { Link } from 'react-router-dom';




function Incidents() {



const Card =[
  {
    id:1,
    img:"/Frame.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",

  },
    {
    id:1,
    img:"/Frame (2).png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
 
  },
    {
    id:1,
    img:"/Frame (1).png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
  
  },
   
]
  return (
    <>
 {/* Card section */}

<div className='text-center'>
  <h1 className='md:text-[2rem] md:font-bold mt-3'>Let’s get started</h1>
  <p className="px-4">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
  
  <img className='w-120 h-auto mx-auto mt-4' src="/weeee.png" alt="" />
</div>


   <div className='grid text-start md:grid-cols-3   mt-10 sm:grid-cols-2 grid-cols-1   w-[80%] mx-auto'>
      {Card.map((item, index)=>(
        <div key={index} className=' gap-4 m-4  hover:scale-105 transition-all  '>
            <img  className='items-start gap-4 m-4' src={item.img} alt="img" />
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-gray-500  text-[12px]'>{item.text} </p>
            <p className='font-bold '>{item.taka} </p>
        </div>
      ))}
      </div>





<button className='text-white bg-orange-500 px-4 py-2 rounded-xl mt-20'> 
  <Link to="/Incidents2">Get Stated</Link>
  </button>

</>
  )
}


export default Incidents;
