import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const HomeThree = () => {
  const [card, setCard] = useState([]);

  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/get`);
      setCard(res.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card-container">
        {card?.map((v, i) => (
          <div className="" key={i + 1}>
            <div className="mb-12">
              <div className="vertical-card">
                <div className="card-header">
                  <img
                    src={`${import.meta.env.VITE_APP_API_BASE_URL}/recipe/image/${v._id}`}
                    alt="Recipe"
                    className="card-image object-cover object-center"
                    loading="lazy"
                  />
                  <h1 className="recipe-title">{v.title}</h1>
                </div>
                <div className="card-content mt-8">
                  <p>
                    <strong>Prep: </strong>
                    {v.prepTime} mins | <strong>Cook: </strong>
                    {v.cookTime} mins
                  </p>
                  <ul className="recipe-features">
                    <li>
                      🍽 <strong>Serves:</strong> {v.serves}
                    </li>
                    <li>🔥 {v.nutritions}</li>
                    <li>🌿 {v.tags}</li>
                  </ul>
                  <Rating rating={v.rate.rating} />
                  <Link to={`/detail/${v._id}`}>
                    <button className="shiny-button">Cook This</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/ap">See more</Link>
    </>
  );
};

export default HomeThree;
