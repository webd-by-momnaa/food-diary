import React from 'react'
import logo from "../RecipeImages/logo.png"
import { Link } from 'react-router-dom'
const ResFoodNav = () => {
  return (
    <div className=''>
      <div className="w-40 m-auto lg:hidden">
            <Link to="/Home">
            <img src={logo} className=' mt-1' alt="Food Diary" />   
            </Link>
            </div>
            <button className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-stone-800 hover:bg-stone-200/10 hover:border-stone-600/10 shadow-none hover:shadow-none  grid lg:hidden"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4"><path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>

    </div>
  )
}

export default ResFoodNav
