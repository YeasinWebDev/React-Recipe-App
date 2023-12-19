import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
      <main className='footer grid bg-[text-[#F2F2F2]]  grid-cols-4 border-t-4 pt-4 pb-4 mx-[15%]'>
        <div>
          <h2 className='flex p-2 rounded-md shadow-xl text-orange-800  font-semibold w-32'><ImSpoonKnife /> <h4><Link to={"/"}>FastRecipes</Link></h4></h2>
          <div className='Newsletter uppercase mt-8 border-4  border-orange-500 w-min py-2 px-8  hover:text-white hover:bg-orange-500  cursor-pointer'>Newsletter</div>
          <div className='mt-4'>
            <h5>Follow Us</h5>
            <div className='flex mt-2'>
            <div className='mr-3'><FaFacebookF /></div>
            <div className='mr-3'><IoLogoInstagram /></div>
            <div className='mr-3'><FaTiktok /></div>
            <div className='mr-3'><IoLogoYoutube /></div>
            <div className='mr-3'><FaTwitter /></div>
            </div>
          </div>
        </div>
        <div className='text-lg font-semibold'>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>DINNERS</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>MEALS</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>INGREDIENTS</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>OCCASIONS</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>CUISINES</div>
        </div>

        <div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>About Us</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Anti-Racism Pledge</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Product Vetting</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Advertise</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Contact</div>
        </div>

        <div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Editorial Process</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Privacy Policy</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Terms of Service</div>
          <div className='hover:border-b-2 border-orange-500 w-min whitespace-nowrap h-min cursor-pointer'>Careers</div>
        </div>

      </main>

  )
}

export default Footer