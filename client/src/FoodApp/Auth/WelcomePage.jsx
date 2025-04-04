import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import  'animate.css';
import Welc from "../RecipeImages/Welcome.jpg"
import logo from "../RecipeImages/logo.png"
import { Navigate, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const Navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const openRegisterModal = () => setShowRegisterModal(true);

  const closeLoginModal = () => setShowLoginModal(false);
  const closeRegisterModal = () => setShowRegisterModal(false);
  
  const Guest = ()=>{
    Navigate("/Home")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 welc">
      <div className="backdrop-blur-lg w-full h-80 max-sm:h-72 max-sm: pt-5 welcome-card">
      <div className="mb-12 text-center ">
      <p className="text-4xl font-bold font-serif ">Welcome to</p>
      <p className="text-6xl font-bold text-lime-400 animate__animated animate__backInLeft font-serif max-sm:text-5xl" >Food Diary</p>
      <p className="italic mt-2 text-gray-900 ">“A recipe sharing app” </p>
      </div>
      <div className="space-x-4 flex item-center justify-center">
        <button
          onClick={openLoginModal}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={openRegisterModal}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
      <button
          onClick={Guest}
          className="bg-orange-500 text-white px-12 py-2 rounded mt-2 hover:bg-orange-600 m-auto block"
        >
          Visit as a Guest
        </button>

      {/* Modals */}
      <Login isVisible={showLoginModal} onClose={closeLoginModal} />
      <Register isVisible={showRegisterModal} onClose={closeRegisterModal} />
      </div>
    </div>
  );
};

export default WelcomePage;
