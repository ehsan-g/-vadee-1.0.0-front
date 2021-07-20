import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from '../components/carousel/Carousel';

const Main = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12} sx={{ width: '100%' }}>
      <Carousel />
    </Grid>
    <Grid item xs>
      Artists You Follow
    </Grid>
    <Grid item xs>
      Photos by popular artists
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
