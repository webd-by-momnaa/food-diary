import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import load from "../RecipeImages/load.gif";

const HomeFive = () => {


  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1); // Track current page
  const [hasMore, setHasMore] = useState(true); // To control "Load More" visibility
  const [loading, setLoading] = useState(false);

  const pageSize = 6; // Number of recipes per page
    const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;


  const fetchRecipes = async () => {
    if (loading) return; // Prevent duplicate requests
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/latest`, {
        params: { page, pageSize },
      });
      const data = response.data;
      setRecipes((prev) => {
        // Only append new recipes if they are not already in the state
        const newRecipes = data.recipes.filter(
          (newRecipe) => !prev.some((prevRecipe) => prevRecipe._id === newRecipe._id)
        );
        return [...prev, ...newRecipes]; // Append new recipes
      });
      setHasMore(data.currentPage < data.totalPages); // Check if there are more pages
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(); // Fetch recipes only when the page changes
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1); // Increment the page number
    }
  };

  return (
    <>
        <h1 className="font-bold text-4xl text-center text-gray-900 mt-5">Latest Recipes</h1>
     
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  lg:px-20 sm:px-8 ">
        {recipes.map((recipe, index) => (
          <div className="relative  pb-8 horiz-card" key={recipe._id || index}>
            <Link to={`/detail/${recipe._id}`}>
              <div className="image-containerlatest hover:text-pink-700 ">
                <img
                  src={`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/image/${recipe._id}`}
                  alt="Recipe"
                  className="w-72 h-56 object-cover object-center"
                  loading="lazy"
                />
                <h1 className="absolute z-20 text-lg">
                  <b>{recipe.title}</b>
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center my-4">
          <button
            className="px-4 py-2 text-lime-700 font-bold text-lg "
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? (
              <img src={load} alt="Loading..." className="w-20 mx-auto" />
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default HomeFive;
