import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './mycarousalstyle.css';
import slide from '../../assets/bg.jpg';
export const MyCarousalComp = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </>
    )
}
