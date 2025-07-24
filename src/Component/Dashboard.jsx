import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilePresentIcon from '@mui/icons-material/FilePresent';


function Dashboarda() {

    const HandelClick = ()=>{
      const chat = document.getElementById("chat");
      const remove = document.getElementById("remove");
      const cBtn = document.getElementById("cBtn");
      chat.style.display="flex";
      remove.style.display="flex";
      cBtn.style.display="none";
    } 
    const XhandelClick= ()=>{
      const chat = document.getElementById("chat");
      const cBtn = document.getElementById("cBtn");
      chat.style.display="none"
      cBtn.style.display="flex"
    }

const Card =[
  {
    id:1,
    img:"/group1.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
    {
    id:1,
    img:"/group2.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
    {
    id:1,
    img:"/group3.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
    {
    id:1,
    img:"/group4.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
    {
    id:1,
    img:"/group5.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
    {
    img:"/group6.png",
    title:"Tulare County",
    text:"Tulare County,  Los Angles, CA 23415",
    taka:"$1,456,654.00",
  },
]

  return (
    <>
 
{/* Search button */}

<div className='flex justify-between py-3  px-5 bg-[#E4E4E780]'>
<div className='md:px-8 px-2  text-start'>
  <p>Welcome back</p>
  <h1 className='text-[24px] font-sans font-bold'>Dashboard</h1>
</div>

<div className='flex gap-2 items-center justify-center '>
<div className=' md:block hidden p-2 bg-white rounded-md '>
  <SearchIcon/>
  <input type="text"  placeholder='Search incident '/>
</div>
<input className=' md:block hidden p-2 rounded-md ' type="text"  placeholder='Search incident '/>
<button className='p-2 bg-[#F26922] text-white rounded-md px-4'>Cypher AI</button>

</div>
</div>

 {/* Card section */}

   <div className='grid text-start md:grid-cols-4 elative z-0 mt-10 sm:grid-cols-2 grid-cols-1 gap-4 w-[80%] mx-auto'>
      {Card.map((item, index)=>(
        <div key={index} className='hover:scale-105 transition-all '>
            <img  className='' src={item.img} alt="img" />
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-gray-500  text-[12px]'>{item.text} </p>
            <p className='font-bold '>{item.taka} </p>
        </div>
      ))}

      </div>

<div  className="fixed bottom-5 right-5 z-50">

{/* C button */}
  <button id='cBtn' onClick={HandelClick} className="flex bg-[#F26922] px-4 py-2 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-white font-bold">
    C
  </button>
</div>

{/*  box  start*/}

<div id='chat' className='hidden flex-col   -mt-[200px]  z-50 '>
    

<div className='bg-[#F4F4F5] flex flex-col t-0 mb-[200px] rounded-2xl mx-auto md:ml-[60%] right-5 md:w-[30%] w-[80%]'>

    <div className='bg-[#F26922] rounded-t-2xl px-1 py-2 w-full'>
        <h1 className=' font-bold text-white text-start text-2xl px-1 py-2'>Chat with Cypher</h1>
    </div>

    <div className=' px-4'>
        <div className=' bg-[#3F3F46] px-2 py-2 rounded-2xl w-[70%] ml-[30%] my-2'>
        <p className='text-white'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    <div className=' bg-[#F4F4F5] border-2  border-gray-300 px-2 py-2 rounded-2xl w-[70%] my-2'>
        <p className='text-gray-500'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    <div className=' bg-[#F4F4F5] border-2  border-gray-300 px-2 py-2 rounded-2xl w-[70%] my-2'>
        <p className='text-gray-500'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    
    <div className=' bg-[#3F3F46] px-2 py-2 rounded-2xl w-[70%] ml-[30%] my-4'>
        <p className='text-white'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
     <div>
        <input type="text" placeholder='Enter your question...' className='px-2 py-2 w-full border-2  border-gray-300 rounded-2xl outline-none' />
     </div>

     <div className='flex justify-between items-center py-4 px-1 '>
 
        <div className=' text-gray-400'><CameraAltIcon /> <CollectionsIcon  /> <FilePresentIcon /> </div>
        <button className='px-[25px] py-[11px] opacity-80 hover:opacity-100 transition-all cursor-pointer bg-[#F26922] text-white font-bold rounded-full
        '>Send</button>
     </div>
    </div>
    
</div>

{/* x button */}

 <div className=" md:ml-[85%] -mt-[200px]">
  <button  id='remove' onClick={XhandelClick} className=" hidden bg-[#d1cfcec5] px-4 py-2 mt-2 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-black font-bold">
    X
  </button>
</div>
</div>



     
    </>
  )
}

export default Dashboarda;
