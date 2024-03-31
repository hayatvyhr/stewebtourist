// export default FilterGuide;
import React, { useState } from 'react';
import img from './img/guide1.jpg';
import img1 from './img/img5.avif';
import img2 from './img/img6.png';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FaMapMarkerAlt, FaStar, FaMoneyBillAlt } from 'react-icons/fa';
import './cards-guide.css'; // Import CSS file for styling

const FilterGuide = (props) => {
  const [ville, setVille] = useState('all');
  const [price, setPrice] = useState('all');
  const [score, setScore] = useState('all');
  const [priceSortOrder, setPriceSortOrder] = useState('asc'); // Default sorting order for price is ascending
  const [scoreSortOrder, setScoreSortOrder] = useState('asc'); // Default sorting order for score is ascending

  const onFilter = () => {
    // Collect all the selected values and pass them to the parent component
    props.FilterValueSelected({ ville, price, score, priceSortOrder, scoreSortOrder });
  }

  return (
    <>
    
      <div className="filter-area">
        <div className="img-filter">
        
        <h1>Choose Your <span style={{ color: "#f96332" }}>Guide</span></h1>
          <p>Are you lost? Book your guide now!</p> 
          <div className="img-container">
          <img id="img1" src={img1} alt="" className='image-animation fade-in-image' />
          <img id="img2" src={img2} alt="" className='image-animation fade-in-image' />
        </div>

          {/* Adjust maxHeight as needed, objectFit: 'cover' maintains the aspect ratio */}
        </div> 
         <img src={img} alt="" className='image-guide' />

        <div className='filter-box'>
          <div className='filter-icon' >
            <select className="ville" value={ville} onChange={(e) => setVille(e.target.value)}>
              <option value="all">All</option>
              <option value="tetouan">Tetouan</option>
              <option value="Rabat">Rabat</option>
              <option value="chefchaouen">Chefchaouen</option>
              <option value="Tanger">Tanger</option>
            </select>
            <p>  <FaMapMarkerAlt className="icon" /> Ville</p>
          </div>
          
          <div className='filter-icon' >
            <select className="sort-order" value={priceSortOrder} onChange={(e) => setPriceSortOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <p>  <FaMoneyBillAlt className="icon" /> Prix/hr</p>
          </div>

          <div className='filter-icon' >
          <select className="sort-order" value={score} onChange={(e) => setScore(e.target.value)}>
              <option value="all">All</option>
              <option value="1">★☆☆☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="3">★★★☆☆</option>
              <option value="4">★★★★☆</option>
              <option value="5">★★★★★</option>
            </select>
            <p>  <FaStar className="icon" /> Score</p>
          </div>

          <button className="btn btn-primary filter-btn" onClick={onFilter}>Filter</button>
        </div>
      </div>
    </>
  )
}

export default FilterGuide;