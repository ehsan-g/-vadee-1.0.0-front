/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';

export default function ArtCard({ artwork }) {
  return (
    <Grid
      sx={{
        marginBottom: 5,
        opacity: 0.6,
        ':hover': {
          opacity: 1,
        },
      }}
    >
      <ImageListItem style={{ color: '#666666' }}>
        <ImageListItemBar
          style={{ background: 'transparent' }}
          actionPosition="left"
          actionIcon={
            <IconButton
              onClick={() => alert('در حال حاضر راه اندازی نشده است')}
              aria-label={`star ${artwork.title}`}
              style={{ zIndex: 10, bottom: '90px' }}
            >
              <FavoriteBorder style={{ color: 'white' }} />
            </IconButton>
          }
        />
        <Link
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          to={`/artworks/${artwork._id}`}
        />
        <img
          srcSet={`${artwork.image}?w=161&fit=crop&auto=format 1x,
                  ${artwork.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
          alt={artwork.title}
          loading="lazy"
        />
        <Typography variant="h6">
          {artwork.artist.firstName} {artwork.artist.lastName}
        </Typography>
        <Typography variant="subtitle1" sx={{ width: '100%', margin: 0 }}>
          {artwork.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ width: '100%', margin: 0 }}>
          ${artwork.price}
        </Typography>
      </ImageListItem>
    </Grid>
  );
}
