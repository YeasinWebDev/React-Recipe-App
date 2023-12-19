import React from 'react';
import { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    const scrollToSection = (id) => {
      const targetElement = document.getElementById(id);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const navigationLinks = document.querySelectorAll('.scroll-link');
    navigationLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }, []);


  return (
    <div className='about mx-[10%] pb-[10vw]'>
      <div className='about-img flex flex-col mt-2 w-[30vw] mx-[25%] mb-[80px]'>
        <img className='img' src="../../img/kitchen Tools.jpg" alt="" />
        <div className='flex align-middle justify-center text-[48px]'>About FastRecipes</div>
      </div>
      <div className='about-tag flex mx-[25%] w-[30vw] flex-wrap'>
        <a href='#Who_We_Are' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>WHO WE ARE</a>
        <a href='#Our_History' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>OUR HISTORY</a>
        <a href='#Recipe_Development_&_Testing' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>RECIPE DEVELOPMENT & TESTING</a>
        <a href='#Comments' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>COMMENTS</a>
        <a href='#Product_Reviews' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>PRODUCT REVIEWS</a>
        <a href='#Write_for_Us' className=' whitespace-nowrap mr-4 mb-2 text-green-800 font-semibold border-b-2 border-orange-300 hover:border-orange-800 cursor-pointer'>Write for Us</a>
      </div>
      <div className='contentsec mx-[10%]'>
        <div id='Who_We_Are'>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Who We Are</h2>
          <p className=' text-[20px]'>FastRecipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.

            FastRecipes was founded in 2003 by Jake Bauer as a home cooking blog to record her favorite family recipes. Today, FastRecipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
        </div>

        <div id='Our_History'>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Our History</h2>
          <p className=' text-[20px]'>Elise Bauer was a busy Silicon Valley executive when she became sick with a flu that wouldn’t go away in 2001. In 2003, Elise moved home with her parents and lived with them for several years, recovering from chronic fatigue and documenting her parents’ cooking on Simply Recipes. (Here’s more of that story.) Over the years, what started as a small blog grew to reach millions of readers every month! In 2020, Simply Recipes was acquired by Dotdash Meredith, a New York-based media company.</p>
        </div>

        <div id='Recipe_Development_&_Testing'>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Recipe Development & Testing</h2>
          <p className=' text-[20px]'>Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.

            There are three things we think about when deciding if a recipe is good enough to go on Simply Recipes:

            First, does it work? Recipes need to be easy to follow and provide reliable results, every time.

            Second, is it delicious? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves?

            Third, is it worth the effort? Do we want to make it again (and again and again)?

            To make sure each of these standards is met, we start by working with expert recipe developers  — people with the experience and knowledge to not only develop a good recipe in their own kitchens, but to make sure that recipe works in yours. Next, we thoroughly review and edit every recipe in-house line by line. Finally, each new recipe is run by our team of recipe testers working in home kitchens with the same pots, pans, and tools that you use in yours. Only after all this is the recipe shared on Simply Recipes.

            Additionally, at Simply Recipes, we aspire to provide the highest quality content produced by humans, for humans. It is against our guidelines to publish automatically generated content using AI (artificial intelligence) writing tools such as ChatGPT.</p>
        </div>

        <div id='Comments'>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Comments</h2>
          <p className=' text-[20px]'>We review and approve every comment left on the site, and generally respond to questions within 1 to 3 days. When leaving comments, we ask that you think of Simply Recipes as our home. Constructive feedback is always welcome, but rude, mean, disrespectful, or spammy comments are not welcome and will not be approved.</p>
        </div>

        <div id='Product_Reviews'>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Product Reviews</h2>
          <p className=' text-[20px]'>
            Our product reviews and recommendations are independent and based on extensive research and product testing. If you visit links within our content, we may receive commissions from your purchases.
          </p>
        </div>

        <div id='Write_for_Us' className=''>
          <h2 className='flex justify-center mb-3 mt-4 font-[600] text-[40px]'>Write for Us</h2>
          <p className=' text-[20px]'>We are always on the lookout for new expert voices to join our team of recipe developers and writers. Please submit pitches along with three examples of your published work (print or online) and a brief bio to write@fastrecipes.com.

            We accept pitches for recipes, how-tos, tips, and technique-driven posts.
            We do not accept pitches for travel writing, restaurant reviews, or dining out stories.
            Please review our site before pitching us.
            Please note that we do not accept unsolicited guest posts or articles.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;



