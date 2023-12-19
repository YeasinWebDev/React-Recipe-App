import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Indian() {
  const [Indian, setIndian] = useState([])

  useEffect(() => {
    getIndian()
  }, [])

  const getIndian = async () => {
    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
      const data = await api.json();
      // console.log(data.meals);
      setIndian(data.meals);
    } catch (error) {
      console.error('Error fetching popular recipes:', error.message);
    }
  };

  return (
    <>
      <main className='Indian mx-[15%]'>
        <h3 className='border-b-2  w-52 mb-2 border-red-800 '>Popular Indian Food</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "-5rem"
        }}>
          {Indian.map(item => {
            return (
              <SplideSlide>
                <div className='Card' >
                  <div id={item.idMeal} className='ind-item'>
                    <Link to={"/recipe/" + item.idMeal} key={item.idMeal}>
                      <img src={item.strMealThumb} alt="" />
                      <p className='text-red-600 text-xl mt-2 '>{item.strMeal}</p>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </main>
      <div className='Indian-btn'>
          <button className='shadow-xl text-orange-500 font-bold p-2 hover:text-white hover:bg-orange-600'><Link to="/indian">Popular Indian  Food</Link> </button>
        </div>
    </>
  )
}



export default Indian