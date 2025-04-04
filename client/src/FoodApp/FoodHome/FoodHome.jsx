import React from 'react'
import HomeOne from "./HomeOne"
import HomeTwo from "./HomeTwo"
import HomeThree from "./HomeThree"
import HomeFour from './HomeFour'
import HomeFive from './HomeFive'
import BlogRecipeTwo from '../FoodBlog/BlogRecipeTwo'
import HomeSix from './HomeSix'
import FoodNav from "../AllFoodNavbars/FoodNav"
import UniFoodNav from "../AllFoodNavbars/UniFoodNav"

const FoodHome = () => {
  return (
    <div>
      <UniFoodNav/>
      <FoodNav/>
      <HomeOne/>
      <HomeTwo/>
      <HomeThree/>
      <HomeFour/>
      <HomeFive/>
      <BlogRecipeTwo/>
      <HomeSix/>
    </div>
  )
}

export default FoodHome
