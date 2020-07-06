import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import './App.css';
import { reviews } from './reviews';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {
  return (
    <div className="App">

      <Reviews>
        <Carousel className = 'slider-container'>
          <div>
            <p>"{reviews[0].text}"</p>
            <h3>{reviews[0].name}</h3>
            <h4>{reviews[0].location}</h4>
          </div>
          <div>
            <p>"{reviews[1].text}"</p>
            <h3>{reviews[1].name}</h3>
            <h4>{reviews[1].location}</h4>
          </div>
          <div>
            <p>"{reviews[2].text}"</p>
            <h3>{reviews[2].name}</h3>
            <h4>{reviews[2].location}</h4>
          </div>
          <div>
            <p>"{reviews[3].text}"</p>
            <h3>{reviews[3].name}</h3>
            <h4>{reviews[3].location}</h4>
          </div>
          <div>
            <p>"{reviews[4].text}"</p>
            <h3>{reviews[4].name}</h3>
            <h4>{reviews[4].location}</h4>
          </div>
          <div>
            <p>"{reviews[5].text}"</p>
            <h3>{reviews[5].name}</h3>
            <h4>{reviews[5].location}</h4>
          </div>
          <div>
            <p>"{reviews[6].text}"</p>
            <h3>{reviews[6].name}</h3>
            <h4>{reviews[6].location}</h4>
          </div>
        </Carousel>
        
      </Reviews>
      
    </div>
  );
}

export default App;

const Reviews = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .slider-container {
    color: white;
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 6%;
    
    p {
      text-align: left;
    }
  }
`