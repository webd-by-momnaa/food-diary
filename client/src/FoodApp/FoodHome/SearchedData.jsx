import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import FoodNav from "../AllFoodNavbars/FoodNav"
import Rating from "./Rating"
import axios from "axios";
import BlogRecipe from "../FoodBlog/BlogRecipe";
import UniFoodNav from "../AllFoodNavbars/UniFoodNav";

const SearchedData = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchQuery = location.state?.query || ""; // Retrieve the search query

  const fetchData = async () => {
    try {
      console.log("Search Query:", searchQuery); // Log the search query
      if (!searchQuery) {
        setCards([]);
        setLoading(false);
        return;
      }

      const res = await axios.get(`http://localhost:5000/recipe/search/${searchQuery}`);
      console.log("API Response:", res.data); // Log the API response
      setCards(res.data.data); // Assuming `data` contains the results
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch search results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (cards.length === 0) return <p className="text-3xl">No results found for "{searchQuery}"</p>;

  return (
    <div className="">
     <UniFoodNav/>
    <FoodNav />
  <div className="text-3xl">Search Results of "{searchQuery}" :</div>
    <div className="card-containerTwo">
      {cards.map((v,i) => (
<div className="vertical-cardTwo ">
<div className="card-headerTwo">
  <img src={`http://localhost:5000/recipe/image/${v._id}`} alt="Recipe" className="card-image object-cover object-center w-80 h-48" loading='lazy'/>
  <h1 className="recipe-titleTwo">{v.title}</h1>
</div><br />
<div className="card-content">
  <p><strong>Prep: </strong>{v.prepTime} mins | <strong>Cook: </strong>{v.cookTime} mins </p>
  <ul className="recipe-features">
    <li>🍽 <strong>Serves:</strong> {v.serves}</li>
    <li>🔥 {v.nutritions}</li>
    <li>🌿 {v.tags}</li>
  </ul>
  <Rating rating = {5}/>
  <Link to={`/detail/${v._id}`}>
  <button className="shiny-button">Cook This</button>
  </Link>
</div>
</div>
      ))}
    </div>
    <BlogRecipe/>
    </div>
  );
};

export default SearchedData;
