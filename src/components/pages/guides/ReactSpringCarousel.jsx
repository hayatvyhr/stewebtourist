import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import ImageCarouselComponent from "./ImageCarouselComponent";


function AppWithCallbackAfterRender() {
  useEffect(() => {
    const navElement = document.querySelector('nav');

    if (navElement) {
      navElement.style.color = '#fff';
      const navLinks = document.querySelectorAll('nav li a');
      navLinks.forEach(link => {
        link.style.color = '#fff';
      });
    }
    // Clean up the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
      navElement.style.color = '';
      const navLinks = document.querySelectorAll('nav li a');
      navLinks.forEach(link => {
        link.style.color = '';
      });
    };
  });

  return <ImageCarouselComponent />;
}

const ReactSpring = () => {

  return (
    <div>
      <AppWithCallbackAfterRender />
    </div>
  );
};

export default ReactSpring;