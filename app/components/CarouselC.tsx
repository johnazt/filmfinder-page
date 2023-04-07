"use-client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselC: React.FC = () => {
  return (
    <div>
      <Carousel autoPlay showThumbs={false}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="kitten 1"
          />
          <p className="legend">Kitten 1</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="kitten 2"
          />
          <p className="legend">Kitten 2</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="kitten 3"
          />
          <p className="legend">Kitten 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselC;
<Carousel autoPlay showThumbs={false}>
  <div>
    <img
      src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="kitten 1"
    />
    <p className="legend">Kitten 1</p>
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="kitten 2"
    />
    <p className="legend">Kitten 2</p>
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1680762424301-604a1697f698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="kitten 3"
    />
    <p className="legend">Kitten 3</p>
  </div>
</Carousel>;
