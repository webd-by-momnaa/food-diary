import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaSearch } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import FoodType from './FoodType';
import axios from 'axios';
import TypewriterEffect from 'react-typewriter-effect';
import logo from "../RecipeImages/logo.png"
import ResFoodNav from './ResFoodNav';
const UniFoodNav = () => {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/profile/get");
      setCard(res.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nav = useNavigate();
  const searchFoods = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/recipe/search/${search}`)
      .then(() => {
        nav("/search", { state: { query: search } });
      })
      .catch((err) => console.log(err.message));
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setIsTyping(e.target.value.length > 0); // Detect if user starts typing
  };

  return (
    <div>
      {/* <FoodType /> */}
      <div className="">
      <ResFoodNav/>
      </div>
      <div className="h-24 Uninavbar light max-sm:hidden max-md:hidden" id="navbar">
        <div className="mt-5 ml-7 flex gap-2">
          <form onSubmit={searchFoods} role="search">
            <div className="relative">
              {/* Show typewriter effect only if the user isn't typing */}
              {!isTyping && (
                <TypewriterEffect
                  textStyle={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#888',
                    paddingLeft: '60px',
                    paddingTop: '10px',
                  }}
                  startDelay={100}
                  cursorColor="#888"
                  multiText={[
                    "Search Food",
                    "Find Recipes",
                    "Discover New Flavors",
                  ]}
                  multiTextDelay={2000}
                  typeSpeed={100}
                  eraseSpeed={50}
                  eraseDelay={1500}
                />
              )}
              <input
                value={search}
                onChange={handleInputChange}
                type="search"
                name="search"
                autoComplete="on"
                autoSave='search'
                className="absolute top-0  rounded-full h-10 pl-10 text-black border border-gray-300 focus:outline-none focus:ring focus:ring-lime-400 bg-transparent"
                aria-label="Search"
                placeholder={isTyping ? "" : ""} // No static placeholder as TypewriterEffect handles it
              />
            </div>
            <FaSearch className="absolute top-8 ml-2 text-gray-500 " />
          </form>
        </div>
        
        <div className="flex pl-9 text-3xl mt-5">
          <div>
            {card?.map((v) => (
              <div key={v._id}>
                <img
                  className="w-12 rounded-full h-12 object-cover object-center"
                  src={`http://localhost:5000/profile/image/${v._id}`}
                  alt="Profile"
                />
                
      <span className="text-sm font-medium">{v.name}</span>

              </div>
            ))}
          </div>
          <FaFacebookSquare className="text-lime-700 hover:opacity-75" />
          <FaTwitterSquare className="text-lime-700 ml-2 hover:opacity-75" />
          <IoLogoInstagram className="text-lime-700 ml-2 hover:opacity-75" />
          <FaYoutube className="text-lime-700 ml-2 hover:opacity-75" />
        </div>
      </div>
      <div className="image-containerLogo max-sm:hidden max-md:hidden -mt-24">
      
      <Link to="/Home">
      <img src={logo} className=' ml-[33rem] mt-1' alt="Food Diary" />   
      </Link>
      </div><br /><br />
    </div>
  );
};

export default UniFoodNav;
