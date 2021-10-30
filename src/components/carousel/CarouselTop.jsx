/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/carouselTop.scss';

// const artworks = [
//   {
//     image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];

export default function CarouselTop({ artworks }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {artworks.map(
          (artwork) =>
            artwork.is_carousel && (
              <div className="images" key={artwork.title}>
                <img
                  src={`${artwork.image}`}
                  alt={artwork.title}
                  loading="lazy"
                  style={{ minWidth: '100%', height: '600px' }}
                />
                <Grid container>
                  <Typography component="p" variant="subtitle1">
                    Vadee Collection
                  </Typography>
                  <Typography variant="h5" component="h5">
                    {artwork.artist.firstName} {artwork.artist.lastName}
                  </Typography>
                  <Typography variant="h4" component="h4">
                    {artwork.title}
                  </Typography>
                  <Typography variant="subtitle2" component="span">
                    <Link to="#">Browse Works</Link>
                  </Typography>
                </Grid>
              </div>
            )
        )}
      </Slider>
    </div>
  );
}

CarouselTop.propTypes = {
  artworks: PropTypes.array.isRequired,
};
