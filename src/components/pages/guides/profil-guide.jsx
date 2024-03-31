import React, { useEffect, useState } from 'react';
import Guides_list from './guides.json';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './profil-guide.css'; 
import { faFacebook, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 

import { useParams } from 'react-router-dom';
import guides from './guides.json'; 


const Profil = () => {

  
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = guides.find(user => user.ID === parseInt(id));
    setUser(foundUser);
  }, [id]);

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
    <div className='container-profil'>
    {user ? (

    <div class="profile-page">
  <div class="content">
    
    <div class="content__cover">
      <div class="content__avatar">
        <img src={user.img} alt="" />
      </div>
      <div class="content__bull"><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="content__actions"><a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path fill="currentColor" d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"></path>
          <path fill="currentColor" d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"></path>
        </svg><span>Connect</span></a><a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"></path>
          <path fill="currentColor" d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"></path>
        </svg><span>Message</span></a></div>
    <div class="content__title">
      <h1>{user.name} {user.prenom}</h1>
      <p style={{color:"gold"}}>{renderStars(user.score)}</p>
    </div>
    <div class="content__description">
      <h4>{user.job} , {user.ville}</h4>

    </div>
    <ul class="content__list">
      <li><span>{user.Followers}</span>Followers</li>
      <li><span>{user.tasks}</span>Tasks</li>
      <li><span>{user.comments}</span>Comments</li>
    </ul>
    <div class="content__button"><a class="button" href="#">
        <div class="button__border"></div>
        <div class="button__bg"></div>
        <p class="">Show more</p></a></div>
  </div>
  <div class="bg">
    <div><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>

  </div>

    ) : (
      <p>User not found</p>
    )}
</div>
    
    </>
  )
}

export default Profil;