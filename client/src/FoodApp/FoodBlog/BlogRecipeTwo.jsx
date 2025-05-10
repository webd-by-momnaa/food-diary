import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { GrNext } from "react-icons/gr";
const BlogRecipeTwo = () => {
  const [card, setCard] = useState([])
    const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

  const data = async ()=>{
    await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/blog/blog`)
    .then((res)=>{setCard(res.data)})
    .catch((error)=>{console.log(error)})
  }
  useEffect(()=>{data()},[])
  return (
    <>
      {/* <div className="flex hover:text-pink-700 cursor-pointer"> */}
      {/* <h1 className='font-bold text-2xl'>Latest Guides</h1> */}
      <h1 className="font-bold text-4xl text-center text-gray-900 mt-5">Latest Guides</h1>
      {/* <GrNext className=' pt-2 text-2xl'/> */}
      {/* </div> */}
      <br />
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-12">
      {
        card?.map((v,i)=>{
          return(
            <>
            <div className="relative w-fit pb-8" key={i+1}>
              <Link to={`/blog/${v._id}`}>
              <div className="image-container hover:text-pink-700">
        <img  src={`${import.meta.env.VITE_APP_API_BASE_URL}/blog/image/${v._id}`} alt="Blog" className='w-72 h-56 object-cover object-center'loading='lazy'/>
        <h1 className='absolute z-20 text-lg'><b>{v.title}</b></h1>
        </div>
        </Link>
               </div>
            </>
          )
        })
      }
    </div>
    </>
          )
        }
export default BlogRecipeTwo