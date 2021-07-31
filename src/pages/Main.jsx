import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, CardActionArea, Button, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Stack from '@material-ui/core/Stack';
import CarouselTop from '../components/carousel/CarouselTop';
import CarouselArtists from '../components/carousel/CarouselArtists';
import CarouselPopular from '../components/carousel/CarouselPopular';
import CarouselNewArtist from '../components/carousel/CarouselNewArtist';
import CarouselCategory from '../components/carousel/CarouselCategory';
import CarouselExhibition from '../components/carousel/CarouselExhibition';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Main = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{ color: '#A2A28F' }}
  >
    <Grid item xs={12} sx={{ width: '100%', marginBottom: 2 }}>
      <CarouselTop />
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{
        backgroundColor: '#A2A28F',
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item xs={2} sx={{ marginTop: 8, color: 'white' }}>
        <Typography variant="h6">Artists</Typography>
        <Typography variant="h6">You</Typography>
        <Typography variant="h6">Followed</Typography>
      </Grid>
      <Grid item xs={8} sx={{ marginTop: 8 }}>
        <CarouselArtists />
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item xs={1} sx={{ marginTop: 8 }}>
        <Typography variant="h6">Photos by</Typography>
        <Typography variant="h6">Popular</Typography>
        <Typography variant="h6">Photographers</Typography>
      </Grid>
      <Grid item xs={9} sx={{ marginTop: 6, maxHeight: 300 }}>
        <CarouselPopular />
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        color: 'white',
        backgroundColor: 'black',
        minHeight: '30vh',
        width: '100%',
      }}
    >
      <Grid item xs={5}>
        <Typography variant="h6">Most Recently viewed</Typography>
        <Typography variant="h3">Artist Name</Typography>
        <Typography variant="h6">Title</Typography>
        <br />
        <Typography variant="span">Browse Works</Typography>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 250, maxHeight: 130 }}>
          <CardActionArea>
            <img
              style={{ height: '100%', width: '100%' }}
              srcSet={`/static/20091127124116_shadi_ghadirian_qajar_vacuum.jpeg?w=164&h=164&fit=crop&auto=format 1x,
              /static/20091127124116_shadi_ghadirian_qajar_vacuum.jpeg?w=250&h=180&fit=crop&auto=format&dpr=2 2x`}
              alt=""
              loading="lazy"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item xs={1} sx={{ marginTop: 8 }}>
        <Typography variant="h6">New Artists</Typography>
      </Grid>
      <Grid item xs={9} sx={{ marginTop: 6, maxHeight: 280 }}>
        <CarouselNewArtist />
      </Grid>
    </Grid>

    <Grid item xs={6} sx={{ marginTop: 8, maxWidth: '80% !important' }}>
      <Box
        component="div"
        sx={{
          p: 4,
          width: '100%',
          border: '1px solid #A2A28F',
          overflowX: 'scroll',
        }}
      >
        <Stack direction="row" spacing={1}>
          {itemData.map((item) => (
            <Button key={item.title} color="secondary" variant="contained">
              {item.title}
            </Button>
          ))}
        </Stack>
      </Box>
    </Grid>

    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: 8,
        backgroundColor: '#EDEEE9',
        minHeight: '20vh',
        width: '100%',
      }}
    >
      <Grid item>
        <Typography color="primary" variant="h2">
          Ready to join?
        </Typography>
      </Grid>
      <Grid item>
        <Button color="secondary" variant="contained">
          Join
        </Button>
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item xs={1} sx={{ marginTop: 8 }}>
        <Typography variant="h6">Street</Typography>
        <Typography variant="h6">Category</Typography>
      </Grid>
      <Grid item xs={9} sx={{ marginTop: 6, maxHeight: 300 }}>
        <CarouselCategory />
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      sx={{
        minHeight: '35vh',
        width: '100%',
      }}
    >
      <Grid item xs={1} sx={{ marginTop: 8 }}>
        <Typography variant="h6">Exhibition</Typography>
      </Grid>
      <Grid item xs={9} sx={{ marginTop: 6, maxHeight: 300 }}>
        <CarouselExhibition />
      </Grid>
    </Grid>
  </Grid>
);

export default Main;
