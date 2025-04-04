import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FoodNavFive from "../AllFoodNavbars/FoodNavFive";
import UniFoodNav from '../AllFoodNavbars/UniFoodNav';
import HomeFive from './HomeFive';
import BlogRecipeTwo from '../FoodBlog/BlogRecipeTwo';
import BlogRecipe from '../FoodBlog/BlogRecipe';
function RecepieDetails() {
  const { id } = useParams();
  const [api, setApi] = useState({});
  const [rate, setRate] = useState({});

  const data = async () => {
    await axios.get(`http://localhost:5000/recipe/single/${id}`)
      .then((res) => {
        setApi(res.data.food);
        setRate(res.data.rate);
      })
      .catch((err) => { console.log(err); });
  };

  useEffect(() => { data(); }, []);

  const renderIngredientsAsList = () => {
    if (Array.isArray(api.ingredients) && api.ingredients.length > 0) {
      const processedIngredients = api.ingredients.flatMap(ingredient =>
        ingredient.split('.').filter(sentence => sentence.trim() !== '')
      );

      return (
        <ul className="list-disc ml-5 ">
          {processedIngredients.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ul>
      );
    }
    return <div>No ingredients available.</div>;
  };

  const renderDescriptionAsList = () => {
    if (typeof api.addDiscription === "string") {
      const sentences = api.addDiscription.split('.').filter(sentence => sentence.trim() !== '');
      return (
        <ol className=" ml-5">
          {sentences.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ol>
      );
    }
    return <div>No description available.</div>;
  };

  const renderDirectionsAsList = () => {
    if (Array.isArray(api.directions) && api.directions.length > 0) {
      const processedDirections = api.directions.flatMap(directions =>
        directions.split('.').filter(sentence => sentence.trim() !== '')
      );

      return (
        <ul className="list-decimal ml-5 ">
          {processedDirections.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ul>
      );
    }
    return <div>No ingredients available.</div>;
  };

  const renderTipsAsList = () => {
    if (typeof api.tips === "string") {
      const sentences = api.tips.split(';').filter(sentence => sentence.trim() !== '');
      return (
        <ol className=" ml-5">
          {sentences.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ol>
      );
    }
    return <div>No description available.</div>;
  };

  return (
    <>
    <UniFoodNav/>
      <FoodNavFive />
      <div>
        <div className="mt- detail">
          <div className='flex'>
            <div className='w-[65rem] h-[35rem] '>
              <img 
                src={`http://localhost:5000/recipe/image/${api._id}`} 
                alt="recipe"
                className="w-full h-full object-cover object-center rounded-md" 
                loading="lazy" 
              />
            </div>
            <div>
              <div className="text-center text-sm text-slate-700 font-mono"><b>Recipe / </b>{api.title}</div>
              <h2 className="recipe-title text-4xl text-lime-700 text-center">{api.title}</h2>
              <div className='text-center'>🍽 <b>Serves: </b>{api.serves}</div>
              <p className='text-center'><strong>Prep: </strong>{api.prepTime} mins | <strong>Cook: </strong>{api.cookTime} mins</p>
              <div className="flex">
              <div className="">
              <div className='w-56'><b>INGREDIENTS:</b>{renderIngredientsAsList()}</div>
              </div>
              <div className="pl-7">
                <p className='border-l-2 border-gray-300 h-[132vh]'></p>
              </div>
              <div className='pl-10'>
              <div><b>DESCRIPTION :</b>{renderDescriptionAsList()}</div>
              <div><b>DIRECTIONS :</b>{renderDirectionsAsList()}</div>
              </div>
              </div>
              <div><b>TIPS :</b>{renderTipsAsList()}</div>
              <p><b>HAPPY COOKING!🍽👩‍🍳</b></p>
            </div>
          </div><br />
          <p className='border-b '></p>
        </div><br />
        <BlogRecipe/>
        <BlogRecipeTwo/><br />
      </div>
    </>
  );
}

export default RecepieDetails;
