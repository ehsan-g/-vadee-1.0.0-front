import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CarouselTop from '../components/carousel/CarouselTop';
import CarouselArtists from '../components/carousel/CarouselArtists';
import CarouselMid from '../components/carousel/CarouselMid';

const Main = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12} sx={{ width: '100%', marginBottom: 2 }}>
      <CarouselTop />
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        backgroundColor: '#A2A28F',
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item sx={{ justifyContent: 'left !important' }}>
        <Typography variant="h6">Artists</Typography>
        <Typography variant="h6">You</Typography>
        <Typography variant="h6">Followed</Typography>
      </Grid>
      <Grid item xs={8}>
        <CarouselArtists />
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        minHeight: '45vh',
        width: '100%',
      }}
    >
      <Grid item sx={{ justifyContent: 'left !important' }}>
        <Typography variant="h6">Photos by</Typography>
        <Typography variant="h6">Popular</Typography>
        <Typography variant="h6">Photographers</Typography>
      </Grid>
      <Grid item xs={8}>
        <CarouselMid />
      </Grid>
    </Grid>
    <Grid item xs>
      Most Recently viewed
    </Grid>
    <Grid item xs>
      <Grid>New Artists</Grid>
      <Grid>Hashtags</Grid>
    </Grid>
    <Grid item xs>
      <Grid>Ready too join?</Grid>
    </Grid>
    <Grid item xs>
      <Grid>Street Category</Grid>
      <Grid>Exhibition</Grid>
    </Grid>
  </Grid>
);

export default Main;
