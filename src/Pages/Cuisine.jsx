import React, { useEffect, useState,useId } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  let id = useId()
  
    const getCuisine = async (name) =>{
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      const recipes = await data.json()
      // console.log(recipes.meals);
      setCuisine(recipes.meals)
    }

    useEffect(() =>{
      getCuisine(params.type)
    },[params])

  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    
    className='each-cuisine-2 grid grid-cols-4 mt-10 mx-[15%]'>
      {cuisine.map(item => {
        return(
          <Link to={"/recipe/" + item.idMeal} key={item.idMeal}>
              <div key={item.idMeal} className='tag-item shadow-xl p-6 rounded-lg h-[18vw]' >
                  <img  className="rounded-full bg-cover bg-center w-[12vw] m-auto" src={item.strMealThumb} alt="" />
                  <p className='text-red-600 text-xl mt-2 flex justify-center align-middle font-bold'>{item.strMeal}</p>
              </div>
          </Link>
        )
      })}
    </motion.div>
  )
}

// 

export default Cuisine