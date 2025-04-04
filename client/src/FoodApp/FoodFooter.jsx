import React from 'react'
import {Link} from "react-router-dom"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import logo from "../FoodApp/RecipeImages/logo.png"
const FoodFooter = () => {
  return (
    <div className='bg-[#3f6212] h-[90vh] text-black mt-12 pt-28'>
           <div className="w-48   -mt-24">
                
                <Link to="/Home">
                <img src={logo} className='ml-13 mt-1' alt="Food Diary" />   
                {/* <p className='text-3xl logo relative ml-[33rem] -top-12'>Food Diary</p> */}
                </Link>
                </div><br />
        {/* <img src={logo} className='w-40 ml-5' alt="Food Diary" />    */}
      <h1 className='text-xl font-bold pl-9 '>Get the Food Diary Newsletter</h1>
<p className=' pl-9 '>Easy recipes and cooking hacks <br /> right to your inbox</p>
<p className='pl-9 mb-2 '><b>Email address</b>(required)</p>
<input type="text" placeholder='Your email address ' className='w-72 h-10 rounded pl-9 ml-9 mb-2'/>
<button className='bg-red-700 w-40 h-10 font-bold ml-9 hover:bg-red-600 '>Sign up</button>
<p className='text-xs ml-9'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
<p className='text-white pl-9'>Follow Food Diary</p>
<div className="flex pl-9 text-3xl"><FaFacebookSquare className='text-lime-300  rounded-full hover:opacity-75'  />
<FaTwitterSquare className='text-lime-300 rounded-full ml-2 hover:opacity-75  '/>
<IoLogoInstagram className='text-lime-300  rounded-full ml-2 hover:opacity-75 '/>
<FaYoutube className='text-lime-300 rounded-full ml-2 hover:opacity-75  '/>
</div>
    </div>
  )
}

export default FoodFooter
