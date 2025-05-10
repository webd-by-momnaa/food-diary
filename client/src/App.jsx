import React from 'react'
import FoodHome from "./FoodApp/FoodHome/FoodHome"
import FoodAbout from "./FoodApp/FoodAbout/FoodAbout"
import FoodProducts from "./FoodApp/FoodProducts/FoodProducts"
import FoodNewsletter from "./FoodApp/FoodNewsletter/FoodNewsletter"
import FoodBlog from "./FoodApp/FoodBlog/FoodBlog"
import FoodFooter from "./FoodApp/FoodFooter"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import RecepieDetails from './FoodApp/FoodHome/RecepieDetails'
import "./FoodApp/Food.css"
import NotFound from './FoodApp/NotFound'
import DetailBlog from './FoodApp/FoodBlog/DetailBlog'
import SearchedData from './FoodApp/FoodHome/SearchedData'
import WelcomePage from './FoodApp/Auth/WelcomePage'
import Login from './FoodApp/Auth/Login'
import Register from './FoodApp/Auth/Register'
const App = () => {
  return (
    <>
        <Router>
        <Routes>
           <Route path="/" element={<WelcomePage/>}></Route>
          <Route path="/Home" element={<FoodHome/>}></Route>
          <Route path="/Tips-&-Tricks" element={<FoodAbout/>}></Route>
          <Route path="/Products" element={<FoodProducts/>}></Route>
          <Route path="/Newsletter" element={<FoodNewsletter/>}></Route>
          <Route path="/Blog" element={<FoodBlog/>}></Route>
          <Route path="/search" element={<SearchedData/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/detail/:id" element={<RecepieDetails/>}></Route>
          <Route path="/blog/:id" element={<DetailBlog/>}></Route>
        </Routes>
        <FoodFooter/>
      </Router>
    </>
  )
}

export default App
