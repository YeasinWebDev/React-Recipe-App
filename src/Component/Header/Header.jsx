import React, { useEffect, useState } from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
import { GrUserManager } from "react-icons/gr";

function Header() {
  const [showNewsletterSection, setShowNewsletterSection] = useState(false);

const handleNewsletterClick = () => {
    setShowNewsletterSection((e) => !e);
  };

  useEffect(() => {
    if (showNewsletterSection === true) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showNewsletterSection])

  return (
    <>
      <div className='header shadow-xl py-4 px-3  h-20  rounded-b-xl flex justify-between  mx-[15%]'>
        <h2 className='flex p-2 rounded-md shadow-xl font-semibold w-32 text-orange-800'><ImSpoonKnife /> <h4><Link to={"/"}>FastRecipes</Link></h4></h2>
        <div className='flex justify-between text-orange-600 font-bold'>
          <div className=' shadow-lg p-2  mr-8 cursor-pointer  rounded-b-xl  hover:text-orange-800'><Link to={"/AboutUs"}>About us</Link> </div>
          <div className=' shadow-lg p-2  mr-8 cursor-pointer rounded-b-xl  hover:text-orange-800' onClick={handleNewsletterClick}>Newslater</div>
          <div className=' shadow-lg p-2  mr-8 cursor-pointer  rounded-b-xl  hover:text-orange-800 flex'> <div className='mt-0.5 mr-1'><GrUserManager /></div><Link to={"/login"}> Log In </Link></div>
        </div>
      </div>

      {/* News letter Section */}
      {showNewsletterSection && (
        <div className='newsletter absolute top-[15%] left-[40%] bg-[#f0f0f0] w-[20vw] h-min  first-letter:newsletter-overlay rounded-lg'>
          <div className='bg-[#EA580C] flex justify-between align-middle p-3 rounded-tr-lg rounded-tl-lg'>
            <h2 className=' font-[600] text-[18px] text-white'>Newsletter Sign Up</h2>
            <div onClick={handleNewsletterClick} className='text-red cursor-pointer border-2 border-black w-[30px] h-[30px] flex justify-center pt-[0.9px] rounded-full font-[600]'>X</div>
          </div>
          <div className='px-[24px]'>
            <h2 className='flex p-2 rounded-md shadow-xl font-semibold w-32 text-orange-800 mx-auto my-5'><ImSpoonKnife /> <h4><Link to={"/home"}>FastRecipes</Link></h4>
            </h2>
            <div className='text-[18px] mb-3'>Get the latest on food trends, healthy recipes, holiday ideas, and easy-to-make meals!</div>

            <div className='mb-4'>
              <h4 className='mb-1 text-[16px] font-[600]'>Email address:</h4>
              <input type="email" placeholder='yourname@wxample.com' className='flex-1 w-full py-3 px-2 border-[2px] border-black rounded-md' />
            </div>
            <div className='bg-orange-100 w-full h-min p-2'>
              <h2 className='flex justify-center py-4 text-[24px] font-[600]'>Newsletter Subscriptions</h2>
              <div className='flex pb-4'>
                <input type="checkbox" id="" />
                <div className='ml-2 text-[18px]'>Dinner Tonight</div>
              </div>
              <div className='flex pb-4'>
                <input type="checkbox" id="" />
                <div className='ml-2 text-[18px]'>Well Seasoned</div>
              </div>
              <div className='flex pb-4'>
                <input type="checkbox" id="" />
                <div className='ml-2 text-[18px]'>Kitchen Fix</div>
              </div>
              <div className='flex pb-4'>
                <input type="checkbox" id="" />
                <div className='ml-2 text-[18px]'>The Food Feed</div>
              </div>
              <div className='flex pb-4'>
                <input type="checkbox" id="" />
                <div className='ml-2 text-[18px]'>Easy Eats</div>
              </div>
            </div>
          </div>
          <div className='w-full mt-2 flex justify-center py-3 bg-orange-400 text-white font-[600] cursor-pointer hover:bg-orange-600 rounded-br-lg rounded-bl-lg'>SIGN UP</div>
        </div>
      )}
    </>
  )
}

export default Header