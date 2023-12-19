import React from 'react'

function Demo() {
  return (
    <div className='demo-0  mx-[15%]'>
      <div className='demo-1 flex mt-10 font-[Montserrat]'>
        <div>
          <img className='w-[80%] demo-bigImg' src="https://www.allrecipes.com/thmb/BOwdfrpVQbI3BZdqWm6U1z7vR44=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/christmas-breakfast-sausage-casserole-photo-by-mackenzie-schieck-2000-1803015044c743c796c93df444584f78.jpg" alt="" />
          <div className='demo-1-text'>
            <h5 className=' uppercase  font-bold text-[#595959] mt-3 mb-2'>Christmas Breakfast</h5>
            <h2 className=' font-bold text-2xl'>21 Christmas Breakfast Casseroles... </h2>
            <h4 className='font-semibold text-sm'>These recipes are just the thing when you have a houseful of holiday guests. Prep the day before, pop them in the oven when you wake up, and breakfast bakes while you sip your coffee—it's like a Christmas miracle!</h4>
          </div>
        </div>
        <div className='demo-2 mt-10 bg-[#F5F6EA] py-3 px-5 h-min w-[35vw]'>
          <h2 className='flex justify-center font-bold text-xl '>News & Trending</h2>
          <div className='demo-3'>
            <div className='flex my-5'>
              <img src="https://www.allrecipes.com/thmb/HTFvSkY4C7O7hLOi4EGabL1K17g=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(2010x1285:2012x1287):format(webp)/AR-Brie-holiday-chicken4x3-d9d1b328c9e641a28fc8b84c9bdfa099.jpg" alt="" />
              <div className='demo-3-p ml-2 font-bold w-1/2'>The Secret Ingredient That Gives Brie Larson's Christmas Chicken Recipe Ultra-Crispy Skin</div>
            </div>
            <div className='flex my-5'>
              <img src="https://www.allrecipes.com/thmb/a1OqZflwE_nN2hLLByJiSxWblNk=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/806903-texas-yum-yum-Pam-Ziegler-Lutz-4x3-fcfab5f1375f440683ced5b3b99e4e1d.jpg" alt="" />
              <div className='demo-3-p ml-2 font-bold w-1/2'>Meet Texas Yum Yum: The Easiest No-Bake Pie You’ll Ever Make</div>
            </div>
            <div className='flex my-5'>
              <img src="https://www.allrecipes.com/thmb/Bf7pfBlrMx61_jCiAnEUO7F7KmE=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(2074x1517:2076x1519):format(webp)/ar-gingerbread-pattern-4x3-9514189aeeee4e91946ae9713d375c0f.jpg" alt="" />
              <div className='demo-3-p ml-2 font-bold w-1/2'>The Most Adorable Gingerbread House Kit Is Only $9 but Won’t Last Long</div>
            </div>
            <div className='flex my-5'>
              <img src="https://www.allrecipes.com/thmb/hVaCL_uJMw7m9LTzdaqoWh0ruGk=/144x95/filters:no_upscale():max_bytes(150000):strip_icc():focal(1968x1545:1970x1547):format(webp)/ar-keepers-book-LSH-DSC_2647-4x3-4c3b01d65ef348959c9eb5b0cd97c104.jpg" alt="" />
              <div className='demo-3-p ml-2 font-bold w-1/2'>Allrecipes Keepers Cookbook: Our Best Recipes From Over 25 Years</div>
            </div>
          </div>
        </div>
      </div>
      <div className='demo-4 flex justify-between mt-10 text-xl bg-orange-600 py-6 px-2'>
        <div className='flex  text-[#FFFFF8] font-bold'>America's <div className='mx-2 text-[#FBD657]'>#1 Trusted Recipe Resource </div>since 2000</div>
        <div className='flex'>
          <div className='flex mr-3 text-[#FFFFF8] text-lg'><div className='text-white text-xl font-bold'>100k</div>Original Recipes</div>
          <div className='flex mr-3 text-[#FFFFF8] text-lg'><div className='text-white text-xl font-bold'>6M+</div>Reatings and Reviews</div>
          <div className='flex mr-3 text-[#FFFFF8] text-lg'><div className='text-white text-xl font-bold'>50M</div>Home Cooks</div>
        </div>
      </div>
    </div>
  )
}

export default Demo