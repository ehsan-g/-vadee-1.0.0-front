/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {
  Typography,
  CardActionArea,
  Button,
  Box,
  Container,
  Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import { fetchAllArtWorks, fetchCategories } from '../actions/artworkAction';
import { cleanLocalCart } from '../actions/cartAction';
import { ARTWORK_DETAILS_RESET } from '../constants/artworkConstants';
import CarouselTop from '../components/carousel/CarouselTop';
import CarouselArtistArtworks from '../components/carousel/CarouselArtistArtworks';
import CarouselCategories from '../components/carousel/CarouselCategories';
import CarouselArtist from '../components/carousel/CarouselArtist';
import CarouselCategory from '../components/carousel/CarouselCategory';

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories, success: successCategories } = categoryList;
  const artworksList = useSelector((state) => state.artworks);
  const {
    error: errorArtworkList,
    loading: loadingArtworkList,
    artworks,
  } = artworksList;

  const keyword = history.location.search;

  // artworks
  useEffect(() => {
    dispatch(fetchAllArtWorks(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(cleanLocalCart());
    dispatch({ type: ARTWORK_DETAILS_RESET });
    return () => {
      dispatch(cleanLocalCart());
    };
  }, [dispatch]);

  //  categories
  useEffect(() => {
    if (!successCategories) {
      dispatch(fetchCategories());
    }
  }, [successCategories, dispatch, history]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ color: '#A2A28F' }}
    >
      <Grid item xs={12} sx={{ width: '100%', marginBottom: 2 }}>
        {artworks && <CarouselTop artworks={artworks} />}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{
          backgroundColor: '#d1d3c8',
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
          <CarouselArtistArtworks />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        sx={{
          minHeight: '35vh',
          width: '90%',
        }}
      >
        <Grid item xs={1} sx={{ marginTop: 8 }}>
          <Typography variant="h6">Featured</Typography>
          <Typography variant="h6">Categories</Typography>
        </Grid>
        {successCategories && (
          <Grid item xs={9} sx={{ marginTop: 6, maxHeight: 300 }}>
            <CarouselCategories categories={categories} />
          </Grid>
        )}
      </Grid>
      {/* Categories */}
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
            {categories &&
              categories.map((category) => (
                <Button
                  key={category.title}
                  color="secondary"
                  variant="contained"
                >
                  {category.title}
                </Button>
              ))}
          </Stack>
        </Box>
      </Grid>
      {/* Last artwork */}
      <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
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
            padding: 5,
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
      </Container>
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
          {/* <CarouselExhibition /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
