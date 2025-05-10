import React, { useEffect, useState } from 'react'
import { Rate } from 'antd';
import { Link } from 'react-router-dom'
import { ImArrowDown } from 'react-icons/im';
import axios from "axios"
const ProductsOne = () => {
  const [data,setData] = useState()
  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

  const recdata  = async () =>{
    await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/complete`)
    .then((res)=>{setData(res.data)})
    .catch((err)=>console.log(err.message))
  }
  useEffect(()=>{recdata()},[])
  function flipCard() {
    const card = document.querySelector('.flip-card-inner');
    card.classList.toggle('is-flipped');
  };
  return (
    <div className="">
      <div className="relative flex space-x-64 justify-center ">
    <h1 className="font-bold text-2xl text-center">Browse All Recipes</h1>
     <ImArrowDown className='absolute mt-2 text-xl'/>
     </div>
    {/* <div className='bg'> */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-3">
        {
          data?.map((v)=>{
            return (
              <>
            <div className="flip-card mt-12">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/image/${v._id}`} alt="" className='w-72 h-48 border border-lime-700 object-cover object-center'/><br />
    </div>
    <div className="flip-card-back opacity-95 pt-12">
    <h1 className="recipe-title text-xl text-lime-200">{v.title}</h1>
    <p><strong>Prep: </strong>{v.prepTime} mins | <strong>Cook: </strong>{v.cookTime} mins </p>     
    <Rate disabled defaultValue={5} />
   </div>
  </div>
  <Link to={`/detail/${v._id}`}>
  <button className='border border-[darkolivegreen] bg-[darkolivegreen] hover:bg-[#798645] w-32 h-9 m-auto block text-lime-200 mt-5' onClick={flipCard}>See Full Recipe</button>
  </Link>
</div>

              </>
            )
          })
        }


      </div>
    {/* </div> */}
    </div>
  )
}

export default ProductsOne