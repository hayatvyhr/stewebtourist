import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};
const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default class ImageCarouselComponent extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow
  };

  slides = images.map((image, index) => ({
    key: uuidv4(),
    content: <img src={image} alt={`${index + 1}`} />,
    onClick: () => this.setState({ goToSlide: index }),
  }));


  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        this.setState({ goToSlide: this.state.goToSlide - 1 });
        break;
      case 39:
        this.setState({ goToSlide: this.state.goToSlide + 1 });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
      // style={{ width: "80%", height: "500px", margin: "0 auto" }}
      style={{ width: "30%", height: "300px", margin: "0 auto" }}
      onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
