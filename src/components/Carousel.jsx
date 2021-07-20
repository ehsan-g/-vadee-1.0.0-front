import React from 'react';
import Slider from 'infinite-react-carousel';
import '../styles/carousel.scss';

const Carousel = () => (
  <Slider dots>
    <div>
      <img
        style={{ width: '100%' }}
        srcSet={`static/photo-1551963831-b3b1ca40c98e.jpeg?w=161&fit=crop&auto=format 1x,
        /static/photo-1551963831-b3b1ca40c98e.jpeg?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt=""
        loading="lazy"
      />
      <p>SVadee Collection</p>
      <p>Shadi Ghajarian</p>
      <p>Qajar Series</p>
    </div>
    <div>
      <img
        style={{ width: '100%' }}
        srcSet={`static/SG-QAJAR+(Camera).jpeg?w=161&fit=crop&auto=format 1x,
        /static/SG-QAJAR+(Camera).jpeg?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt=""
        loading="lazy"
      />
    </div>
    <div>
      <img src="static/SG-QAJAR+(Camera).jpeg" alt="" />
    </div>
  </Slider>
);
export default Carousel;
