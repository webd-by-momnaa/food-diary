import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom'

import axios from 'axios';
import Login from '../Auth/Login';
const FoodNavTwo = () => {
  const location = useLocation();
  const message = location.state?.message;
  const [card, setCard] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/profile/get");
      setCard(res.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  const nav = useNavigate()
  const [search,setSearch] = useState("")
  const searchFoods = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/recipe/search/${search}`)
      .then((res) => {
        nav("/search", { state: { query: search } }); // Pass search query
      })
      .catch((err) => console.log(err.message));
  };
  

window.addEventListener("scroll", function () {

  const navbar = document.getElementById("navbar");

  // Check the scroll position
  if (window.scrollY > 10) {
    navbar.classList.remove("light");
    navbar.classList.add("dark");   
  } else {
    navbar.classList.remove("dark"); 
    navbar.classList.add("light");   
  }
 
  
});

  return (
    <div className="mb-3">
       {/* {message && <p className='text-2xl text-lime-700 text-center'>{message}</p>} */}
    <div className=' navbar light mt-[2.2rem]' id='navbar'>

      <div className="text-black a font-medium flex justify-center -mt-10 border-t border-l border-r bg-slate-100 w-full h-12 mx-5 uppercase">
        <Link to="/Home" className=' h-8 px-5 py-2'>Recipes</Link>
        <Link to="/Tips-&-Tricks" className='border-l border-gray-300 h-8 px-5 py-2'>Tips & Tricks</Link>
        <Link to="/Products" className='border-l border-gray-300 h-8 px-5 py-2'>Products</Link>
        <Link to="/Newsletter" className='border-l border-gray-300 h-8 px-5 py-2'>Newsletter</Link>
        <Link to="/Blog" className='border-l border-gray-300 h-8 px-5 py-2'>Blog</Link>
      </div>
    </div>
    </div>
  )
}

export default FoodNavTwo
