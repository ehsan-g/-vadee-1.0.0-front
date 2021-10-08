/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtistsArtworks } from '../../actions/artistAction';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowForwardIosIcon
      fontSize="large"
      className={className}
      style={{
        display: 'block',
        color: 'white',
        opacity: '30%',
        margin: 2,
        fontWeight: '0.05rem',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      fontSize="large"
      className={className}
      style={{
        display: 'block',
        color: 'transparent',
        margin: 2,
      }}
    />
  );
}

export default function CarouselArtistArtworks({ artistId }) {
  const dispatch = useDispatch();

  const artistArtworkList = useSelector((state) => state.artistArtworkList);
  const { error, loading, artworks, success } = artistArtworkList;

  useEffect(() => {
    console.log(artistId);
    if (!success) {
      dispatch(fetchArtistsArtworks(artistId));
    }
  }, [success, dispatch]);

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <div
        style={{
          // maxWidth: `850px`,
          display: 'block',
        }}
      >
        {success && (
          <Slider {...settings}>
            {artworks.map((artwork) => (
              <div
                className="artworks-images"
                key={artwork.title}
                style={{ width: 300 }}
              >
                <img
                  srcSet={`${artwork.image}?w=164&h=164&fit=crop&auto=format 2x,
                  ${artwork.image}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                  alt={artwork.title}
                  loading="lazy"
                  style={{ maxWidth: 250 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    color: 'black',
                  }}
                >
                  {artwork.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {artwork.lastName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {artwork.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    padding: 0,
                    margin: 0,
                    lineHeight: 1,
                    fontWeight: 'bold',
                  }}
                >
                  <Link style={{ color: '#99CCCC' }} to="#">
                    Browse Gallery
                  </Link>
                </Typography>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}
