import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ImSpoonKnife } from "react-icons/im";
import { GrUserManager } from "react-icons/gr";

const DropDown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className='dropdown px-4 py-3 bg-[#FFFFFF] shadow-xl'>
      <div className="header-content">
        {isDropdownVisible ? (
          <div onClick={toggleDropdown} className='text-orange-800 text-red cursor-pointer border-2 border-orange-800 w-[30px] h-[30px] flex justify-center pt-[0.9px] rounded-full font-[600]'>X</div>
        ) : (
          <div className='flex  justify-between'>
            <h2 className='flex p-2 rounded-md shadow-xl font-semibold w-32 text-orange-800'><ImSpoonKnife /> <h4><Link to={"/"}>FastRecipes</Link></h4></h2>
            <button className="dropdown-btn" onClick={toggleDropdown}>
              <div className='text-orange-800'><AiOutlineMenu /></div>
            </button>
          </div>
        )}

        {isDropdownVisible && (
          <div className="flex align-middle mx-auto">
             <h2 className='flex p-2 me-8 rounded-md shadow-xl font-semibold w-32 text-orange-800'><ImSpoonKnife /> <h4><Link to={"/"}>FastRecipes</Link></h4></h2>
             <div className='mt-2  mr-8 text-orange-600 font-bold shadow-lg px-1 w-fit cursor-pointer  rounded-b-xl  hover:text-orange-800'><Link to={"/AboutUs"}>About us</Link> </div>
             <div className='mt-2 mr-8 text-orange-600 font-bold shadow-lg px-1 w-fit cursor-pointer  rounded-b-xl  hover:text-orange-800 flex'> <div className='mt-0.5 mr-1'><GrUserManager /></div><Link to={"/login"}> Log In </Link></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DropDown;
