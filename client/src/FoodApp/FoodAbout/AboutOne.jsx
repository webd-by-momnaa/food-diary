import React from 'react'
import { GrNext } from "react-icons/gr";
import roast from "../RecipeImages/roast.jpg"
import chop1 from "../RecipeImages/chop1.jpg"
import chop2 from "../RecipeImages/chop2.jpg"
import chop3 from "../RecipeImages/chop3.jpg"
import oil from "../RecipeImages/oil.jpg"
import fish from "../RecipeImages/fish.jpg"
import blog1 from "../RecipeImages/blog1.jpg"
import cookies1 from "../RecipeImages/cookies1.jpg"
import cookies2 from "../RecipeImages/cookies2.jpg"

const AboutOne = () => {
  return (
    <div>
        <div className=" hover:cursor-pointer">
          <h1 className='text-5xl font-bold text-black'>21 Tiny Habits That'll Make <br /> Everything You Cook Taste <br /> Better</h1>
          <p className='text-slate-500'>These are seriously useful.</p>
        </div>
        <div className=" text-black">
        <div className="flex justify-around ">
        <div className="">
        <h1 className='text-3xl pt-5 pb-5 font-semibold  hover:cursor-pointer'>1. Chop ingredients uniformly.</h1>
        <div className="flex pl-5 pt-5 ">
          <div className="">
<img src={chop1} alt="" className='w-64 h-80 border-4 border-white'loading='lazy'/>
<img src={chop2} alt="" className='w-64 h-80 border-4 border-white'loading='lazy'/>
</div>
<div className="">
<img src={chop3} alt="" className='w-64 h-[108vh] border-4 border-white'loading='lazy'/>
</div>
</div>
<div className=" pl-5 pt-4">
  <p> <b>Remember:</b> If it looks the same, it cooks the same. When prepping, slice <br /> ingredients so they're all about the same size. This ensures everything <br /> cooks evenly and consistently — and lets you avoid overdone smaller <br /> pieces, and still-raw larger ones.</p>
</div>
</div>
      
<div className="">
<div className="relative">
<div className="flex mt-5 ">
  <p className='text-2xl font-bold'>What We're Cooking </p>
  <GrNext className='pl-3 text-4xl'/>
  </div>
  <div className="image-container hover:text-pink-700">
  <img src={blog1} alt="" className='w-80'/>
<p className='absolute z-20 font-bold text-sm'>"if you have these two ingredients you've Got <br /> best dinner":peaople are sharing their best in <br /> -a-pinch meals they make when they don't fell <br /> like cooking.</p>
</div>
</div>

<div className="relative">
<div className="flex mt-24">
  <p className='text-2xl font-bold'>Holiday Cookie Showdown </p>
  <GrNext className='pl-3 text-4xl'/>
  </div>
  <div className="image-container hover:text-pink-700">
  <img src={cookies1} alt="" className='w-80 h-72'/>
<p className='absolute z-20 font-bold text-sm'>"if you have these two ingredients you've Got <br /> best dinner":peaople are sharing their best in <br /> -a-pinch meals they make when they don't fell <br /> like cooking.</p>
</div>
</div>
</div>
</div>







<div className="flex justify-around">
<div className="">
     <h1 className='text-3xl pt-5 pb-5 font-semibold  hover:cursor-pointer'>2. Don't add ingredients to a pan <br /> until the oil is hot enough.</h1>
        <div className=" pl-5 pt-5">
      <img src={oil} alt="" className='w-96 h-96'loading='lazy'/>
</div>
<div className="pl-5 pt-4">
  <p> <b>Remember:</b>If the oil isn't ready, food will soak it up instead of sizzling in <br /> it — and the end result won't taste as good. You want oil hot enough so <br /> that it swirls or ripples when you move the pan, but not so hot that it <br /> smokes. Learn more about how to spot the difference here.</p>
</div>
</div>
<div className="">
<div className=" card">
<div className="flex mt-5">
  <p className='text-2xl font-bold'>Trending Cookies </p>
  <GrNext className='pl-3 text-4xl'/>
  </div>
  <div className="image-container">
  <img src={cookies2} alt="" className='w-80 h-72'/>
  </div>
<p className='font-semibold'>"if you have these two ingredients you've Got <br /> best dinner":peaople are sharing their best in <br /> -a-pinch meals they make when they don't fell <br /> like cooking.</p>
</div>
<div className=" card">
<div className="flex mt-5">
  <p className='text-2xl font-bold'>Trending Recipes </p>
  <GrNext className='pl-3 text-4xl'/>
  </div>
  <img src={roast} alt="" className='w-80 h-72'/>
<p className='font-semibold'>"if you have these two ingredients you've Got <br /> best dinner":peaople are sharing their best in <br /> -a-pinch meals they make when they don't fell <br /> like cooking.</p>
</div>
</div>
</div><br /><br />



<div className="flex justify-around ">
<div className="">
<h1 className='text-3xl pb-5 font-semibold hover:cursor-pointer'>3. For the best sear, dry meat off <br /> with a paper towel first.</h1>
        <div className=" pl-5 pt-5">
      <img src={fish} alt="" className='w-96 h-96 'loading='lazy'/>
</div>
<div className=" pl-5 pt-4">
  <p> <b>Remember:</b>Meat can carry a layer of moisture on the outside, so it's <br /> important to get rid of that if you want the sharpest sear when the <br /> protein hits the pan. The quickest way? Dry it with a paper towel.</p>
</div><br /><br />
</div>
<div className="subs">
<h3 className='text-2xl text-white font-bold text-center mt-4'>The Food Diary Newsletter</h3>
<p className='text-center text-white'>Easy recipes and cooking hacks <br /> right to your inbox</p><br />
<p className='pl-9 mb-2 text-white'><b>Email address</b>(required)</p>
<input type="text" placeholder='Your email address ' className='w-72 h-10 rounded pl-9 ml-9 mb-2'/><br />
<button className='bg-red-700 w-72 h-10 font-bold ml-9 text-white'>Sign up</button>
<p className='text-xs ml-9 text-white'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
</div>

</div>
</div>



{/* <h3 className='text-3xl bg-blue-200 pt-5 pb-5 font-semibold hover:underline hover:cursor-pointer'>4. When working with aromatics, <br /> add garlic last.</h3>
        <div className=" pl-5 pt-5 bg-blue-200">
      <img src={garlic} alt="" className='w-[40%] h-[108vh]'loading='lazy'/>
</div>
<div className="bg-blue-200 pl-5 pt-4">
  <p> <b>Remember:</b>Because garlic burns easily, many recipes tell you to add it <br /> last, and that's a great blanket rule — especially if it's minced or <br /> chopped.</p>
</div> */}





{/* <h3 className='text-3xl bg-blue-200 pt-5 pb-5 font-semibold hover:underline hover:cursor-pointer'>5. Clean as you go!</h3>
        <div className=" pl-5 pt-5 bg-blue-200">
      <img src={clean} alt="" className='w-[40%] h-[108vh]'loading='lazy'/>
</div>
<div className="bg-blue-200 pl-5 pt-4">
  <p> <b>Remember:</b>Plant a scrap bowl right on the counter so you don't have <br /> to sidetrack to the trash, and load dirty plates straight into the washer <br /> instead of stacking them in the sink. Keeping things neat makes the <br /> cooking process easier — and cuts down on cleanup afterwards.</p>
</div> */}
      </div>
  )
}

export default AboutOne
