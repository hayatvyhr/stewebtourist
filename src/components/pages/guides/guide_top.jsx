import React, { useState } from 'react';
import Guides_list from './guides.json';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './guide_top.css'; 
import { faFacebook, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 
import  Icon  from './img/ICONS.png';

const FilterGuide = (props) => {

  const sortedGuides = Guides_list.sort((a, b) => b.score - a.score);

  const top3Guides = sortedGuides.slice(0, 3);
  const renderStars = (score) => {
    const starCount = Math.round(score); 
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>); 
    }
    return stars;
  };
  return (
    <>
    <div class="container_card">
      <img src={Icon} alt="" className='icon' />
    <div class="title-div">            
    <h1  class="title">OUR TOP GUIDES</h1>
            <Link to="/Planning" className="btn btn-outline-primary explorebtn">Explore All</Link>
      
  </div>
    <div class="row1">
    {top3Guides.map((guide, index) => (
  
        <div class="col-lg-3" key={guide.ID}>
            <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                    <div class="thumb-lg member-thumb mx-auto"><img src={guide.img} class="rounded-circle img-thumbnail" alt="profile-image"/></div>
                    <div class="">
                    <h4>{guide.name} {guide.prenom}</h4>
                    <h4 style={{color : 'gold'}}> {renderStars(guide.score)}</h4>
                        <p class="text-muted">@{guide.name} <span>| </span><span><a href="#" class="text-pink">{guide.job}</a></span> | {guide.ville}</p>
                    </div>
                    <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a href="#" title="Facebook" data-toggle="tooltip" data-placement="top" className="tooltips">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" title="Twitter" data-toggle="tooltip" data-placement="top" className="tooltips">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" title="Skype" data-toggle="tooltip" data-placement="top" className="tooltips">
                        <FontAwesomeIcon icon={faSkype} />
                      </a>
                    </li>
                  </ul>
                    <div class="mt-4">
                        <div class="row">
                            <div class="col-4">
                                <div class="mt-3">
                                    <h4>{guide.Followers}</h4>
                                    <p class="mb-0 text-muted">Followers</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="mt-3">
                                    <h4>{guide.tasks}</h4>
                                    <p class="mb-0 text-muted">Tasks</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="mt-3">
                                    <h4>{guide.comments}</h4>
                                    <p class="mb-0 text-muted">Comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <Link to={`/profil/${guide.ID}`} className='button__text'>Visit Profil</Link>

                </div>
            </div>
        </div>


                ))}


            </div>


        </div>
    
    </>
  )
}

export default FilterGuide;