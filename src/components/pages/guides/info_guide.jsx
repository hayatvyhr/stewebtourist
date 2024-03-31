// import Info_guide from './Info_guide-guide'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './cards-guide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import img_profil from './img/guide1.jpg'
import { Link } from 'react-router-dom'; 


function Info_guide(props) {
  const renderStars = (score) => {
    const starCount = Math.round(score); // Round the score to the nearest integer
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>); // Assuming you're using Font Awesome for stars
    }
    return stars;
  };
  return (  
<div className=" profile-page">
    <div className="row">
        <div className="">
            <div className="card profile-header">
                <div className="body ">
                    <div className="row ">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="profile-image">
                            <img src={props.img} className='img-profil' alt="" />
                            </div>
                          <div className="star-rating" style={{color: 'gold'}}>
                              {renderStars(props.score)}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-12 info">
                            <h4 className="m-t-0 m-b-0"><strong>{props.name}</strong> {props.prenom}</h4>
                            <span className="job_post">{props.job}</span>
                            <h6 className="job_post">{props.price}</h6>
                            <h6 className="job_post">{props.ville} , 795 Folsom Ave, Suite 600 San Francisco</h6>

                            <div className="social-icon m-t-5 m-b-0">
                          <a title="Twitter" href="https://twitter.com">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a title="Facebook" href="https://facebook.com">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a title="Behance" href="https://behance.net">
                            <FontAwesomeIcon icon={faBehance} />
                          </a>
                          <a title="Instagram" href="https://instagram.com">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
 
                       </div> 
                       <div className='col-lg-3 col-md-4 col-12'>
                          <div>
                          <Link to={`/profil/${props.id}`} >
                            <button className="btn-profil">Profil</button>
                        </Link>
                            </div>
                          <div>
                              <button className="btn-contact">Message</button>
                          </div> 
                        </div> 
                    </div>
                    
                </div>                    
            </div>
            </div>
        </div>
        </div>
  );
}

export default Info_guide;