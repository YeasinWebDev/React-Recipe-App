import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { LuChefHat } from "react-icons/lu";

function Search() {
    const [input, setInput] = useState('')
    const navigate = useNavigate() 
    
    const submitHandler = (e) =>{
        e.preventDefault()
        navigate("/searched/"+ input)
        setInput("")
    }
  return (
    <form className='search flex  align-middle flex-col mt-5 mx-[15%]' onSubmit={submitHandler}>
      <div className='search-text font-sans font-semibold text-2xl w-full flex justify-center '> 
        <div className='text-orange-500 text-3xl '><LuChefHat /></div> What would you like to cook today? 
      </div> <br/>
        <div className='search-input flex bg-orange-600 w-1/2 p-3 rounded-2xl mt-3  mx-auto'>
            <FaSearch className=' searchBtn bg-white rounded-l-2xl'/> 
            <input 
            className='flex-1 p-2 rounded-r-2xl  border-none outline-none font-semibold '
            type='text'
            placeholder='Search For Recipes...'
            value={input}
            onChange={e => setInput(e.target.value)}
            />
        </div>
    </form>
  )
}

export default Search