import React, { useId } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

function recipes() {
  const [recipe, setRecipe] = useState([])
  let params = useParams()
  let id = useId()

  const getRecipe = async (id) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const recipes = await data.json()
    // console.log(recipes.meals);
    setRecipe(recipes.meals)
  }

  useEffect(() => {
    getRecipe(params.id)
  }, [params])

  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    className='each-cuisine mt-10'>
      {recipe.map(item => {
        return (
          <div key={item.idMeal} className='mt-6 cursor-pointer p-2 mx-[15%]'>
            <div className='mr-10 flex justify-center align-middle'>
              <img className="rounded-md w-[20vw]  bg-cover bg-center" src={item.strMealThumb} alt="" />
              <div className='mt-8 text-2xl grid grid-cols-2 w-1/2 h-full'>
                <div className='font-bold auto-rows-max uppercase ml-10'>
                  <div>Name</div>
                  <div>Category</div>
                  <div>Youtube</div>
                  <div>Area</div>
                  <div>Tag</div>
                </div>
                <div className=' text-red-400 w-200%  font-semibold'>
                  <div className='w-[200%] whitespace-nowrapj'>:" {item.strMeal} "</div>
                  <div className='w-full'>:" {item.strCategory} "</div>
                  <div className='text-red-900 flex-wrap w-full'>{item.strYoutube && (
                    <a
                      href={`https://www.youtube.com/watch?v=${item.strYoutube.split('v=')[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      :" Video "
                    </a>)}
                  </div>
                  <div className='w-full'>:" {item.strArea} "</div>
                  <div className='whitespace-nowrap'>:" {item.strTags} "</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='border-b-2 mt-10 text-2xl font-bold border-red-800 flex  justify-center'> INSTRUCTIONS: </div><br /><div className='text-red-400 font-bold text-lg'>" {item.strInstructions} "</div>
              </div>

              <div className='uppercase my-5 font-bold text-2xl w-1/2 border-b-2 border-red-800 flex justify-center'>Ingredients: </div>
              <div className='font-semibold'>
                <div className='grid grid-cols-2 w-2/3 text-xl'>
                  <div className='one'>
                    <div className='border-b-2 w-20 mb-2 border-red-800 text-red-600'>Ingredient</div>
                    <div>{item.strIngredient1}</div>
                    <div>{item.strIngredient2}</div>
                    <div>{item.strIngredient3}</div>
                    <div>{item.strIngredient4}</div>
                    <div>{item.strIngredient5}</div>
                    <div>{item.strIngredient6}</div>
                    <div>{item.strIngredient7}</div>
                    <div>{item.strIngredient8}</div>
                    <div>{item.strIngredient9}</div>
                    <div>{item.strIngredient10}</div>
                    <div>{item.strIngredient11}</div>
                    <div>{item.strIngredient12}</div>
                    <div>{item.strIngredient13}</div>
                    <div>{item.strIngredient14}</div>
                    <div>{item.strIngredient15}</div>
                    <div>{item.strIngredient16}</div>
                    <div>{item.strIngredient17}</div>
                    <div>{item.strIngredient18}</div>
                    <div>{item.strIngredient19}</div>
                    <div>{item.strIngredient20}</div>
                  </div>
                  <div className='two'>
                    <div className='border-b-2 w-16 mb-2 border-red-800  text-red-600'>Measure</div>
                    <div>{item.strMeasure1}</div>
                    <div>{item.strMeasure2}</div>
                    <div>{item.strMeasure3}</div>
                    <div>{item.strMeasure4}</div>
                    <div>{item.strMeasure5}</div>
                    <div>{item.strMeasure6}</div>
                    <div>{item.strMeasure7}</div>
                    <div>{item.strMeasure8}</div>
                    <div>{item.strMeasure9}</div>
                    <div>{item.strMeasure10}</div>
                    <div>{item.strMeasure11}</div>
                    <div>{item.strMeasure12}</div>
                    <div>{item.strMeasure13}</div>
                    <div>{item.strMeasure14}</div>
                    <div>{item.strMeasure15}</div>
                    <div>{item.strMeasure16}</div>
                    <div>{item.strMeasure17}</div>
                    <div>{item.strMeasure18}</div>
                    <div>{item.strMeasure19}</div>
                    <div>{item.strMeasure20}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default recipes



