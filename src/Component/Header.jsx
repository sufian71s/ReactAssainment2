import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilePresentIcon from '@mui/icons-material/FilePresent';





function Header() {


  
  return (
    <>

     <nav className='    '>


      {/* Navber */}
      <ul className='w-full flex flex-wrap  justify-between  bg-[#E4E4E780]  border-b-2 py-4     md:p-2'>

      <div className='md:block hidden p-2 '>
        <img src="/Logo.png" alt="" /></div>  


<div className='flex md:[&>li]:pl-5 md:text-[18px] justify-center items-center text-[12px]  [&>li]:pl-2  text-[#71717A]  '>
  <li  className='hover:font-semibold hover:text-black hover:underline'><Link to="/Dashboard">Dashboard</Link></li>
   <li className='hover:font-semibold hover:text-black hover:underline'><Link to="/Incidents">Incidents</Link></li>
  <li className='md:block hidden hover:font-semibold hover:text-black hover:underline' ><Link to="/Locations">Locations</Link></li>
  <li className='hover:font-semibold hover:text-black hover:underline'><Link to="/Activities">Activities</Link></li>
  <li className='hover:font-semibold hover:text-black hover:underline'><Link to="/Documents">Documents</Link></li>
  <li className='hover:font-semibold hover:text-black hover:underline'><Link to="/Cypher AI">Cypher AI</Link></li>
</div>




<div className='md:block hidden'>
  <div className='flex gap-2 '>
<img src="/Notification.png" alt="" />
<img src="/man.png" alt="" />

<div className=' text-start pl-2  pr-8 text-[#71717A]'>

  <h2 className='font-bold'>Usman Zafar</h2>
  <p>usmanzafar@gmail.com</p>
</div>
</div>
</div>
      </ul>
     </nav>






















    </>
  )
}

export default Header;
