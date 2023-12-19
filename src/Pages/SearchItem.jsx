import React, { useEffect, useState,useId } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function SearchItem() {
  const [searchItem, setSearchItem] = useState([])
  let params = useParams()
  let id = useId()
  
    const getSearchItem = async (name) =>{
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      const recipes = await data.json()
      // console.log(recipes.meals);
      setSearchItem(recipes.meals)
    }

    useEffect(() =>{
      getSearchItem(params.search)
    },[params])


    return (
      <motion.div className='each-cuisine grid grid-cols-3 mt-10 mx-[15%]'>
        {searchItem.map(item => {
          return(        
            <div key={item.idMeal} className='mb-6 cursor-pointer'>
                <Link to={"/recipe/" + item.idMeal}>
                <div><img  className="rounded-md w-2/3" src={item.strMealThumb} alt="" /></div>
                <p className='searchItem-p text-red-600 text-xl mt-2 font-semibold'>{item.strMeal}</p>
               </Link>
              </div>           
          )
        })}
      </motion.div>
    )
  }
export default SearchItem