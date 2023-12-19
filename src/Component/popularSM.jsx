import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function PopularSm() {
    const [popularSm, setPopularSm] = useState([])

    useEffect(() => {
        getPopular()
    },[])
    const getPopular = async () => {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        const data = await api.json();
        // console.log(data.meals);
        setPopularSm(data.meals); 
      } catch (error) {
        console.error('Error fetching popular recipes:', error.message);
      }
    };

  return (
    <>
      <main className='mx-[5%]'>
        <h3 className='border-b-2  w-60 mb-2 border-red-800 '>Popular Canadian Food</h3>
        <div className='grid grid-cols-2 gap-2 '>
            {popularSm.map(item => {
              return (
                  <Link to={"/recipe/" + item.idMeal} key={item.idMeal}>
                    <div className=' shadow-xl px-2 py-3 rounded-md'>
                      <img className='w-[35vw] rounded-full' src={item.strMealThumb} alt="" />
                      <p className='text-red-600 text-md font-semibold mt-2 flex justify-center '>{item.strMeal}</p>
                    </div>
                  </Link>
              )
            })}  
        </div>
      </main>
    </>
  )
}



export default PopularSm