import React, {useEffect}from "react";
import Slider from "react-slick";
import AOS from 'aos';
function SimpleSlider() {

  
  useEffect(()=>{AOS.init(
    {
  delay: 0, 
  duration: 1500,
  easing: 'ease', 
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
    }
  );},[])
  const settings = {
    fade: true,
    draggable: true,
    lazyLoad: 'ondemand', // Loads images as needed  
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    autoplaySpeed: 2000,
    infinite: true,
  };
  
  return (
    
    <div className="slider-container">
      <Slider {...settings}>
        <div className="one text-center pt-60 object-cover">
          <h1 className="text-5xl text-black slide-caption">Discover Deliciousness</h1>
          <p className="text-white pt-5 text-xl"><i>Swipe through handpicked recipes from around the world!</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>
        </div>
        <div className="two text-center pt-60 ">
          <h1 className="text-5xl slide-caption">Cook, Share, Repeat!</h1>
          <p className="text-white text-xl pt-5"><i>Your next favorite recipe is just a slide away</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>

        </div>
        <div className="three text-center pt-60 ">
          <h1 className="text-5xl slide-caption">Your Recipe Adventure Awaits</h1>
          <p className="text-white text-xl pt-5"><i>Explore new dishes and share your culinary creations.</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>

        </div>
        <div className="four text-center pt-60 ">
          <h1 className="text-5xl slide-caption">Flavor Packed in Every Swipe</h1>
          <p className="text-white text-xl pt-5"><i>Endless inspiration for your next meal.</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>

        </div>
        <div className="five text-center pt-60 ">
          <h1 className="text-5xl slide-caption">What's Cooking Today?</h1>
          <p className="text-white text-xl pt-5"><i>Find trending recipes and make them your own.</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>
        </div>
        <div className="six text-center pt-60 ">
          <h1 className="text-5xl slide-caption">Savor the Flavor</h1>
          <p className="text-white text-xl pt-5"><i>Get inspired with recipes tailored to your taste.</i></p><br /><br />
          <button className="border-2 border-lime-800 bg-lime-800  w-28 h-9 hover:opacity-80 btn">More Detail</button>

        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
