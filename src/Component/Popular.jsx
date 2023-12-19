import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Popular() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    },[])
    const getPopular = async () => {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        const data = await api.json();
        // console.log(data.meals);
        setPopular(data.meals); 
      } catch (error) {
        console.error('Error fetching popular recipes:', error.message);
      }
    };

  return (
    <>
      <main className='Canadian mx-[15%]'>
        <h3 className='border-b-2  w-60 mb-2 border-red-800 '>Popular Canadian Food</h3>
        <Splide options={{
          perPage:5,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:"-5rem",
        }}>
            {popular.map(item => {
              return (
                <SplideSlide>
                  <Link to={"/recipe/" + item.idMeal} key={item.idMeal}>
                  <div className='Card '>
                    <div className='canadian-card'>
                      <img src={item.strMealThumb} alt="" />
                      <p className='text-red-600 text-xl mt-2'>{item.strMeal}</p>
                    </div>
                  </div>
                  </Link>
                </SplideSlide>
              )
            })}  
        </Splide>
      </main>
        <div className='canadian-btn'>
            <button className='shadow-xl text-orange-500 font-bold p-2 hover:text-white hover:bg-orange-600'>
              <Link to="/popular">Popular Canadian Food</Link>
            </button>
        </div>
    </>
  )
}



export default Popular