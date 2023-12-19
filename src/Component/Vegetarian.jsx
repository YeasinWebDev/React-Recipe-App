import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Vegetarian() {
  const [Vegetarian, setVegetarian] = useState([])

  useEffect(() => {
    getVegetarian()
  },[])

  const getVegetarian = async () => {
    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`);
      const data = await api.json();
      // console.log(data.meals);
      setVegetarian(data.meals); 
    } catch (error) {
      console.error('Error fetching popular recipes:', error.message);
    }
  };

return (
  <>
    <main className='vegetarian mx-[15%]'>
      <h3 className='border-b-2  w-48 mb-2 ml-2 border-red-800  whitespace-nowrap'>Vegetarian Section</h3>
      <div className='grid grid-cols-5'>
          {Vegetarian.map(item => {
            return (
                <div className='vege-Item mr-2 shadow-xl p-6 rounded-lg'  key={item.idMeal}>
                <Link to={"/recipe/" + item.idMeal} key={item.idMeal}>
                    <img className='veg-img rounded-full bg-cover bg-center w-[12vw]' src={item.strMealThumb} alt="" />
                    <p className='vegetarian-p text-red-600 text-xl mt-2 flex justify-center align-middle'>{item.strMeal}</p>
                </Link>
                </div>
       
            )
          })}       
      </div>

    </main>
  </>
)
}

export default Vegetarian