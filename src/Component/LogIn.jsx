import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

function LogIn() {
    return (
        <div className='mx-0 flex login' >
            <img className='w-[50%] h-screen object-cover bg-cover bg-center mr-20' src="/.././img/login.jpg" alt="" />

            <div className='mt-[15%]'>
                <h2 className='flex  rounded-md shadow-xl text-orange-800  font-semibold w-32'><ImSpoonKnife /> <h4><Link to={"/"}>FastRecipes</Link></h4></h2>

                <div>
                    <h3 className='mt-5 mb-2 font-bold'>Log in</h3>
                    <div className='loginsec flex align-middle whitespace-nowrap border-2  border-gray-600 mb-2 py-2 px-5 hover:text-white hover:bg-black'><div className='mt-1 mr-2 hover:text-white'><MdOutlineMail /></div>  Log in with Email</div>
                    <div className='loginsec flex align-middle whitespace-nowrap border-2  border-gray-600 mb-2 py-2 px-5 hover:text-white hover:bg-blue-600'><div className='mt-1 mr-2 text-blue-600 hover:text-white'><FaFacebookF /></div> Log in with Facebook</div>
                    <div className='loginsec flex align-middle whitespace-nowrap border-2  border-gray-600 mb-2 py-2 px-5 hover:text-white hover:bg-blue-500'><div className='mt-1 mr-2 text-blue-500'><FaGoogle /></div> Log in with Google</div>
                </div>
            </div>
        </div>
    )
}

export default LogIn