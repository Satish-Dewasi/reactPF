import React from 'react'
import { useState } from 'react';
function Navbar() {

const [toggleMenu, setToggleMenu]= useState(false);

  function handleToggle(){
      setToggleMenu(prev=> !prev)
  }
  return (
     <nav className='w-full h-[9vh] bg-black   flex items-center justify-between' >
          {/* Logo */}
          <div className=' logo  text-white bg-black font-bree font-bold text-[33px] tracking-wider	   w-[30%] md:w-[20%] h-[100%] pl-2 md:pl-7  flex items-center whitespace-nowrap justify-start' > Satish Dewasi </div>
          
          {/* nav itmes */}
          <div className={`  bg-slate-800 text-white absolute  ${toggleMenu ? 'top-[9vh]' : 'top-[-400px]'}   menu   w-full h-[40vh] md:static md:w-[60%] md:h-[9vh] `}  >
            
            {/* container */}
             
             <div className='w-[100%] h-[100%]  bg-black flex flex-col md:flex-row items-center justify-evenly ' >
                   {/* items container */}

                   <div className='w-[100%] md:w-[70%]  h-[80%] md-h[100%]  font-semibold text-[20px] tracking-wider uppercase       flex flex-col md:flex-row items-center justify-evenly' >
                       
                       <div className=' hover:text-orange-400 z-0 ' >Home </div>
                       <div className=' hover:text-orange-400 z-0 ' >About </div>
                       <div className=' hover:text-orange-400 z-0 ' >Project </div>
                       <div className=' hover:text-orange-400 z-0 ' >Contact </div>

                   </div>

                   {/* icons contaier */}

                   <div className='w-[40%] md:w-[30%] h-[10%] flex  items-center justify-evenly' >
                       
                       <div> <img className='w-8' src="./assets/linkedin-for-dark.png" alt="" /> </div>
                       <div> <img className='w-8' src="./assets/github-for-dark.png" alt="" /></div>
                       <div> <img className='w-8' src="./assets/sun.png" alt="" /></div>

                   </div>



             </div>
           

          </div>

         
         {/* Menu */}
        
        <div onClick={handleToggle} className=' toggleMenu md:hidden  flex items-center justify-center w-[10%] h-[100%]'> 
              <img className='w-10' src="./assets/menu-for-dark.png" alt="" />
        </div>

     </nav>
  )
}

export default Navbar