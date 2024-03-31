import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {useTypewriter} from "react-simple-typewriter";
import '@fortawesome/fontawesome-free/css/all.css';
import  { useState } from 'react';
import { Link } from 'react-router-dom'; 
import cardsData from "./cards.json";

import "./Places.css";
const TypingEffect = () => {
  const [typeEffect] = useTypewriter({
    words: [' Nature', ' Beach', ' Museum', ' History '],
    loop: {},
    typeSpeed:40,
    deleteSpeed: 10,
  });

  return (
    <div className="typing-container">
      <h1 className="typing-title">
        Find What Are You Searching For 
        <span className="sp">
          {typeEffect}
        </span>
      </h1>
      <br />
    </div>
  );
};

  export default function Places() {
    const [selectedOption, setSelectedOption] = useState(null);
    const allCards = cardsData;
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setSelectedOption(option === 'allCards' ? null : option.toLowerCase());

    };
    const [searchQuery, setSearchQuery] = useState(''); 



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

   
    
    const filteredCards = selectedOption
    ? allCards.filter(
        (card) =>
          card.id.toLowerCase() === selectedOption.toLowerCase() &&
          card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
  
    
  return (
  
    <div className="parent">
   
     <div className="div1" style={{ marginTop: '50px' }} >
     <TypingEffect />
      
    </div>
    
    


<div className="div2" style={{ marginLeft: '4rem' }}> 
<div className="container mt-5" >
<h3 className="mt-4 ml-4" style={{ color: ' #2bf1c4', fontWeight: 'bold'  }}>Select an option:</h3>

  
  <ul className="list-group"  style={{ backgroundColor: '#d5d5d5 !important' }}>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('allCards')}   style={{backgroundColor:' #000742' , color: 'whitesmoke' }}>All</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('Nature')} style={{backgroundColor:' #000742',  color: 'whitesmoke'  }} >Nature</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('History')}  style={{backgroundColor:' #000742', color: 'whitesmoke'  }}>History</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('Beach')}  style={{backgroundColor:' #000742' , color: 'whitesmoke' }}>Beach</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('Museum')}  style={{backgroundColor:' #000742', color: 'whitesmoke'  }}>Museum</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('res')} style={{backgroundColor:' #000742' , color: 'whitesmoke' }}>RESTAURANT/RIAD</li>
  <li className="list-group-item custom-color"  onClick={() => handleOptionClick('others')} style={{backgroundColor:' #000742', color: 'whitesmoke'  }}>Others</li>
</ul>

</div>
</div>
<div className="div3">

  <div className="search-bar" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search"
               value={searchQuery}
               onChange={handleSearchChange} 
              
              />
              <button className="btn btn-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>

      <div className="row justify-content-center">

          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div className="col-md-8 mb-3" key={index}>
                <div className="card custom-card" style={{ width: '100%' }} id={card.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                    <img src={card.imgSrc} className="img-fluid rounded-start h-100" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="" />                
                      </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{card.title} <br /> <span className='rating'>{renderStarRating(card.rating)} </span>
                        <span>{card.score}</span></h5>
                        <p className="card-text">{card.description}</p>
                        <Link to ="./transport"className="btn btn-primary">Visit Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No cards found for the selected option.</p>
          )}
        </div>
      </div>

    </div>
 

  );
}

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
