import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-center text-white" style={{ backgroundColor:'#000742',width: '100%',marginTop:'100px' }}>
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-2" style={{ backgroundColor: '#000742' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">travel.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
