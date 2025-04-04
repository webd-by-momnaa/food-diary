import {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Rating from './Rating'
const HomeThree = () => {
  const [card, setCard] = useState([])
  const data = async ()=>{
    await axios.get("http://localhost:5000/recipe/get")
    .then((res)=>{setCard(res.data)})
    .then((error)=>{console.log(error)})
  }
  useEffect(()=>{data()},[])
  return(
    <>
    <div className="card-container">
      {
        card?.map((v,i)=>{
          return (
            <>
            <div className='' key={i+1}>
              <div className=" mb-12 ">

          <div className="vertical-card ">
            <div className="card-header">
              <img src={`http://localhost:5000/recipe/image/${v._id}`} alt="Recipe" className="card-image object-cover object-center" loading='lazy'/>
              <h1 className="recipe-title">{v.title}</h1>
            </div>
            <div className="card-content mt-8">
              <p><strong>Prep: </strong>{v.prepTime} mins | <strong>Cook: </strong>{v.cookTime} mins </p>
              <ul className="recipe-features">
                <li>🍽 <strong>Serves:</strong> {v.serves}</li>
                <li>🔥 {v.nutritions}</li>
                <li>🌿 {v.tags}</li>
              </ul>
              <Rating rating = {v.rate.rating}/>
              <Link to={`/detail/${v._id}`}>
              <button className="shiny-button">Cook This</button>
              </Link>
            </div>
          </div>
          </div>
          </div>
          </>
          )
        })
      }
      </div>
      <Link to="/ap">See more</Link>
    </>
    )
  }
export default HomeThree