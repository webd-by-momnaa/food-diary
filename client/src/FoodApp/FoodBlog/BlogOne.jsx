import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import BlogRecipe from "./BlogRecipe"
import BlogRecipeTwo from './BlogRecipeTwo';
const BlogOne = () => {
  const [card, setCard] = useState([]);

  // Fetch blog data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/blog/get");
      setCard(res.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
    // Fetch blog data
    const fetchCateg = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blog/oncateg/:categ");
        setCard(res.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

  useEffect(() => {
    fetchData(); fetchCateg();
  }, []);

  // Render description as an ordered list
  const renderDescriptionAsList = (description) => {
    if (typeof description === "string") {
      const sentences = description.split(';').filter(sentence => sentence.trim() !== '');
      return (
        <ol className="ml-5 ">
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

  // Render descriptionThree as a bullet list
  const renderDescriptionThreeAsList = (descriptionThree) => {
    if (Array.isArray(descriptionThree) && descriptionThree.length > 0) {
      const processedDescription = descriptionThree.flatMap(description =>
        description
          .split('.')
          .filter(sentence => sentence.trim() !== '')
      );

      return (
        <ul className="list-disc ml-5">
          {processedDescription.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ul>
      );
    }
    return <div>No additional details available.</div>;
  };
  const renderExtraDescriptionAsList = (extraDescription) => {
    if (Array.isArray(extraDescription) && extraDescription.length > 0) {
      const processedDescription = extraDescription.flatMap(description =>
        description
          .split('.')
          .filter(sentence => sentence.trim() !== '')
      );

      return (
        <ul className=" ml-5">
          {processedDescription.map((sentence, index) => (
            <li key={index} className="mb-2">
              {sentence.trim()}
            </li>
          ))}
        </ul>
      );
    }
    return <div>No additional details available.</div>;
  };

  return (
    <div className="blog-container">
      {card?.map((v, i) => (
        <div className="blog-card" key={v._id || i}>
          <div className=" mx-12 mb-7">
            {/* Title and Subtitle */}
            <b className="text-3xl">{v.title || "Untitled Blog"}</b>
            <div className="text-lg">{v.subTitle || "No subtitle available"}</div>

            {/* Image */}
            <div className="image-containerReceipe w-full h-full object-cover object-center my-5">
              <img
                src={`http://localhost:5000/blog/image/${v._id}`}
                alt={v.title || "Blog image"}
                className="w-full object-cover rounded"
                loading="lazy"
              />
            </div>
            <div className="flex ">
            <div className=" text-lg">
            {/* Description List */}
            <div className="">
              {renderDescriptionAsList(v.description)}
            </div>

            {/* Additional Descriptions */}
            <b className="text-xl block mt-5">{v.descriptionOne || "No additional details available."}</b>
            <div className="mt-2">{v.descriptionTwo || "No further information provided."}</div>

            {/* Description Three List */}
            <div className="mt-5">
              {renderDescriptionThreeAsList(v.descriptionThree)}
            </div>
            <b className="text-lg">{renderExtraDescriptionAsList(v.extraDescription)}</b>
            </div>
            <div className="">
            <div className="">
            {/* Profile Card */}
            {v.profileCard ? (
              <div className=" mt-5 p-4 border rounded-md shadow-sm w-72">
                <div className="flex">
                <div className="mb-3">
                  <img
                    className="w-12 h-12 object-cover rounded-full "
                    src={`http://localhost:5000/profile/image/${v.profileCard._id}`}
                    alt={v.profileCard.name || "Profile image"}
                  />
                </div>
                <div className="ml-3 mt-1">
                  <div className=" text-sm font-bold text-gray-800">{v.profileCard.name || "Anonymous"}</div>
                  <div className="text-gray-600 text-sm font-semibold">{v.profileCard.work || "No designation available"}</div>
                  </div>
                  </div>
                  <div className="mt-2 text-gray-600">{v.profileCard.description || "No description available."}</div>
                  <button className="bg-lime-800 w-full h-9 text-white rounded">Follow</button>
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-5">No profile card available.</div>
            )}
            </div>
            </div>
            </div>
        
          </div>
          <BlogRecipe />
            <Link to={`/blog/${v._id}`}>
               <BlogRecipeTwo />
      </Link>
        </div>
      ))}


     
    </div>
  );
};

export default BlogOne;
