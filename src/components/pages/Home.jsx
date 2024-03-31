import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom'; 
import "./home.css";
import jsonData from "./cards.json"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export const Home = () => {
  const [places, setPlaces] = useState([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  useEffect(() => {
    const sortedData = jsonData.sort((a, b) => b.rating - a.rating);
    const topFourPlaces = sortedData.slice(0, 4);
    setPlaces(topFourPlaces);
  }, []);


  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    const handleScroll = () => {
      // Check if any part of the container is in view
      const container = document.querySelector('.container');
      const containerTop = container.getBoundingClientRect().top;
      const containerBottom = container.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if ((containerTop > 0 && containerTop < windowHeight) || (containerBottom > 0 && containerBottom < windowHeight)) {
        controls.start({
         
          scale: [ 1, 0.8, 1],
          borderRadius: [ "50%", "50%", "20%"],

          opacity: 1, 
          transition: {
            duration: 3, // Duration of the animation
          }
        });
      } 
      
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);



  const toggleCard = (index) => {
    setExpandedCardIndex(prevIndex => (prevIndex === index ? null : index));
    const card = document.getElementsByClassName('card')[index];
    if (card) {
      card.classList.toggle('expanded');
    }
  };

    

  return (
    <div >
      <section className="welcome-section " >
        <div className="container_s1">
          <div className="welcome-text-container">
            <img src="src/img/image.png" className='border_top' alt="Tetouan city image" />
            <h1>Welcome to </h1>
            <h1 style={{color:'#2BF1C4'}} >Tetouan</h1>
            <p>The heart of Moroccan culture and history</p>
            <button>Explore Tetouan</button>
          </div>
          <div className="image-container">
            <img src="src/img/img2.png" alt="Tetouan city image" />
            <img src="src/img/img3_border.png" className='border_under' alt="Tetouan city image" />
          </div>
        </div>
      </section>
      <section className="section py-2">
      <motion.div
      className="container" animate={controls}
      >
        <div className="paragraph-container">
          <p className="white-text">Discover Tetouan's charm as you wander through its ancient Medina, a UNESCO World Heritage site filled with Andalusian architecture and vibrant markets. Immerse yourself in the city's rich history. With stunning landscapes nestled in the Rif Mountains, Tetouan beckons nature enthusiasts to explore its picturesque surroundings.</p>
        </div>
        <div className="parent1 mt-4 py-2">
          <div className="div1">
            <h3 style={{ color: '#000742'}}>Best places to visit In Tetouan</h3>
          </div>
          <div className="div22">
            <Link to="/Places" className="btn btn-outline-primary">Explore All</Link>
          </div>
        </div>
        <br />
        <div className="row">
          {places.map((place, index) => (
            <motion.div
              key={index}
              className={`col-sm-3`}
          
            >
              <div className={`card ${expandedCardIndex === index ? 'expanded' : ''}`} onClick={() => toggleCard(index)}>
                <img src={place.imgSrc} className="card-img-top img-fluid" alt="" style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{place.title}</h5>
                  <span> {renderStarRating(place.rating)} </span>
                  <span>{place.score}</span>
                  {expandedCardIndex === index && (
                    <p className="card-text" style={{ fontSize: 'px' }}>{place.description}</p>
                  )}
                  <div className="d-flex justify-content-center mt-3">
                    <Link to="./transport" className="btn btn-primary">Visit Now</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
      <section className="about py-7 ">
      <div class="pabout">
  <div class="diva1">            
    <h1 style={{ color: "#000742", textAlign: "center", fontSize: "2em", fontWeight: "800", fontFamily: "Arial, sans-serif" }}>About Us</h1>
  </div>
  <motion.div animate={controls} class="diva2"> 
    <img src="src/img/about.jpg" alt="" width={400} style={{ marginLeft: '5rem' }} />
    </motion.div>
  <div class="diva3">     
          <div className="custom-container mx-auto" style={{ background: "#000742", width: "800px", border: "2px solid #2bf1c4", borderRadius: "10px", padding: "20px" }}>
            <p className="text-white p-3">Welcome to our website, where your travel experience is our top priority. We offer a comprehensive range of services tailored to meet the diverse needs of tourists. Whether you're exploring a bustling city or venturing into serene landscapes, we ensure seamless transportation through various modes including cars, taxis, and buses, ensuring you reach your desired destinations with ease and comfort.</p>
            
            <p className="text-white p-3">At our website, we provide meticulously crafted travel plans and guides, curated by seasoned experts, to help you make the most of your journey.</p>
            
            <p className="text-white p-3">Immerse yourself in the rich history and vibrant culture of the cities you wish to explore, with insightful narratives and anecdotes that bring each location to life.</p>
            
            <p className="text-white p-3">In addition to transportation and guides, we also offer recommendations for the best hotels at the most competitive prices, ensuring you enjoy a comfortable and memorable stay throughout your trip.</p>
            
            <p className="text-white p-3">Whether you're embarking on a solo adventure, a romantic getaway, or a family vacation, let our website be your ultimate companion, providing everything you need to create unforgettable memories and embark on unforgettable journeys.</p>
          </div>
        </div>
  
</div>

    </section>
    </div>
  );
};

function renderStarRating(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: i <= rating ? 'gold' : 'gray', marginRight: '2px' }}
      />
    );
  }
  return stars;
}
