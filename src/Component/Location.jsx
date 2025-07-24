import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Locations() {


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
  },]







  return (
    <div>
        
<div className='flex justify-between py-3  px-5 bg-[#E4E4E780]'>
<div className='md:px-8 px-2  text-start'>
  <p>Incidents - DR-4699 March 2023 Severe Storms </p>
  <h1 className='text-[24px] font-sans font-bold items-center flex gap-2'> <img src="/public/1 (16).png" alt="" /> DR-4699 March 2023 Severe Storms</h1>
</div>

<div className='flex gap-2 items-center justify-center '>
<div className=' md:block hidden p-2 bg-white rounded-md '>
  <SearchIcon/>
  <input type="text"  placeholder='Search incident '/>
</div>
<input className=' md:block hidden p-2 rounded-md ' type="text"  placeholder='Sort By: Date modified'/>
<button className='p-2 bg-[#F26922] text-white rounded-md px-4'>+ New Location</button>

</div>
</div>

























    <section className='grid md:grid-cols-2 grid-cols-1 mx-auto justify-around w-[90%] '>
      <div className=''>
      <div className='flex  py-4 items-start gap-2'>
        <img src="/Vector.png" alt="" />
        <div className='text-start'>
          <p className='text-[13px] text-gray-500'>Location</p>
            <h1 className='font-bold md:text-[13px] '>Tulare County,  Los Angles, CA 23415</h1>
          
        </div>
      </div>
      <div className='flex   items-center gap-2'>
        <img src="/Vector (1).png" alt="" />
        <div className='text-start'>
          <p className='text-[13px] text-gray-500'>Approx. Cost:</p>
            <h1 className='font-bold md:text-[13px] '>$60,607,456.00</h1>
          
        </div>
      </div>

      <hr className='my-20 text-gray-300' />

      <h1 className='font-bold text-2xl'>Description</h1>
      <p className='text-gray-500 py-5'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>

      <hr className='text-gray-300 my-[70px]' />
      <div className='flex justify-between items-center'>
        <h1 className='font-bold '>Locations</h1>
        <p className='text-gray-500'>See all</p>
      


      </div>
        <div className=''>
    <div className='grid text-start md:grid-cols-3 elative z-0 mt-10 sm:grid-cols-2 grid-cols-1 gap-4 w-[80%] mx-auto'>
      {Card.map((item, index)=>(
        <div key={index} className='hover:scale-105 transition-all '>
            <img  className='' src={item.img} alt="img" />
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-gray-500  text-[12px]'>{item.text} </p>
            <p className='font-bold '>{item.taka} </p>
        </div>
      ))}

      </div>
           

        </div>
      </div>

      <div className='md:w-1/2 mx-auto flex max-h-[500px]  py-10'>
        <img  src="/map2.png" alt="" />
      </div>


    </section>







    </div>






  )
}

export default Locations;
