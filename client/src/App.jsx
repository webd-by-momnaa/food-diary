// import React from "react"
// import One from "./Navone"
// import Six from "./Navsix"
// import Home from "./Home/Home"
// import About from "./About/About"
// import Blog from "./Blog/Blog"

// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import "./web.css"
// const App = () => {
//   return (
//     <>
  
// <Router>
//   <One/>
  
//   <Routes>
//     <Route path="/" element={<Home/>}></Route>
//     <Route path="/ab" element={<About/>}></Route>
//     <Route path="/bl" element={<Blog/>}></Route>

//   </Routes>
//   <Six/>
// </Router>

//       </>
//   )
// }

// export default App




// import React from 'react'
// import Fetchapi from './Api/Fetchapi'
// import ForSingle from "./Api/ForSingle"
// import UpdateFlower from "./Api/UpdateFlower" 
// // import Albumapi from "./Api/Albumapi"
// // import Mediaapi from "./Api/Mediaapi"
// // import Cardapi from "./Api/Cardapi"
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import Register from './Auth/Register'
// import "./web.css"
// const App = () => {
//   return (
//     <div>
//       <Router>
   
  
//   <Routes>
//     <Route path="/" element={<Fetchapi/>}></Route>
//     <Route path="/ab/:id" element={<ForSingle/>}></Route>
//     // <Route path="/ac/:id" element={<UpdateFlower/>}></Route>
//     <Route path="/log" element={<Register/>}></Route>
    

//    </Routes>
   
//  </Router>
//     </div>
//   )
// }

// export default App





// import React from 'react'
// // import Childone from "./props/Childone"
// import Childthree from "./props/Childthree"
// const App = () => {
//   const fun = () => {
    
//   }
//   return (
//     <div>
//       {/* <Childone text={"car"} fun={fun} /> */}
//       <Childthree text={""}fun={fun} />
//     </div>
//   )
// }

// export default App





// import {useState} from 'react'
// import { GoSun } from "react-icons/go";
// import { IoMoonOutline } from "react-icons/io5";
// import Childthree from "./props/Childthree"
// const App = () => {
//   const [mode, setMode] = useState(false)
//   function chang (){
//     setMode(!mode)
//   }
//   return (
//     <>
//    {
//       mode?<div className='bg-white w-[50%] h-[40vh] text-white bg-gray-400'>hello world</div>
//       :
//       <div className='bg-black text-black w-[100%] h-[100vh] '>hello world</div>
//     }
//       {mode? <GoSun className='absolute top-0 top-[200px] left-[600px] text-6xl '/>:<IoMoonOutline className='absolute top-0 top-[200px] left-[600px] text-6xl text-white'/>}
//     <Childthree chang={chang}/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Slider from "./Slider"
// import Furniture from "./FurnitureUI"
// const App = () => {
//   return (
//     <>
//       <Furniture/>
//       <Slider/>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Logo from "./LogoPersonal"
// import PersonalNav from './PersonalNav'
// import Personal from './Personal/Personal'
// import PersonalAbout from './PersonalAbout/PersonalAbout'
// import PersonalPost from './PersonalPost/PersonalPost'
// import PersonalContact from './PersonalContact/PersonalContact'
// import "./web.css"
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// const App = () => {
//   return (
//     <>
//      <Router>
//      <Logo/>
//      <PersonalNav/>
  
//    <Routes>
//     <Route path="/" element={<Personal/>}></Route>
//     <Route path="/pa" element={<PersonalAbout/>}></Route>
//     <Route path="/pp" element={<PersonalPost/>}></Route>
//     <Route path="/pc" element={<PersonalContact/>}></Route>



//    </Routes>
//    {/* <Six/> */}
//  </Router>
//     </>
//   )
// }

// export default App




// import React from 'react'
// import PortfolioNav from "./PortfolioNav"
// import PortfolioHome from './PortfolioHome/PortfolioHome'
// import PortfolioAbout from "./PortfolioAbout/PortfolioAbout"
// import PortfolioServices from "./PortfolioServices/PortfolioServices"
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import "./portfolioWeb.css"
// const App = () => {
//   return (
//     <>
//       <Router>
//     <PortfolioNav/>
//     <Routes>
//      <Route path="/" element={<PortfolioHome/>}></Route>
//      <Route path="/ab" element={<PortfolioAbout/>}></Route> 
//      <Route path="/ps" element={<PortfolioServices/>}></Route>
//      {/* <Route path="/pc" element={<PersonalContact/>}></Route>  */}



//    </Routes>
//    {/* <Six/> */}
//  </Router>
//     </>
//   )
// }

// export default App



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
