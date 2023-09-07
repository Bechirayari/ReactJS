import React from 'react'
 // importation du conposant du boostrap Carousel
import Carousel from 'react-bootstrap/Carousel';
import l1 from '../img/m1.jpg'
import l2 from '../img/m2.jpg'
import l3 from '../img/m3.jpg'
const HeaderTopp = () => {
  return (
    <div>
        // creation du carousel à l'aide du composant du boostrap
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HeaderTopp
