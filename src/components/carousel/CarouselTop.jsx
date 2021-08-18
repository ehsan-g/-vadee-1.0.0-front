/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/carouselTop.scss';

export default function CarouselTop({ artworks }) {
  const settings = {
    className: 'center',
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {artworks.map((artwork) => (
          <div className="images" key={artwork.title}>
            <img
              src={`${artwork.image}?w=1440&h=500&fit=crop&auto=format 1x,
                ${artwork.image}?w=1440&h=400&fit=crop&auto=format&dpr=2 2x`}
              style={{ maxHeight: '500px' }}
              alt={artwork.title}
              loading="lazy"
            />
            <Typography component="p" variant="subtitle1">
              Vadee Collection
            </Typography>
            <Typography variant="h5" component="h5">
              {artwork.title}
            </Typography>
            <Typography variant="h4" component="h4">
              {artwork.title}
            </Typography>
            <Typography variant="subtitle2" component="span">
              <Link to="#">Browse Works</Link>
            </Typography>
          </div>
        ))}
      </Slider>
    </div>
  );
}

CarouselTop.propTypes = {
  artworks: PropTypes.array.isRequired,
};
