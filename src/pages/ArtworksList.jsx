/* eslint-disable prefer-destructuring */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import { Grid, Box, Typography, Paper, Hidden } from '@mui/material';
import { useHistory, Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import ArtCard from '../components/ArtCard';
import { fetchAllArtWorks, cleanTheCart } from '../actions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ARTWORK_DETAILS_RESET } from '../constants/artworkConstants';
import SideFilter from '../components/SideFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    paddingTop: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  responsive: {
    // margin: 40,
    // width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

function ArtworksList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(cleanTheCart());
    dispatch({ type: ARTWORK_DETAILS_RESET });
    return () => {
      dispatch(cleanTheCart());
    };
  }, [dispatch]);

  const artworksList = useSelector((state) => state.artworks);
  const { error, loading, artworks, pages } = artworksList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(fetchAllArtWorks(keyword));
  }, [dispatch, keyword]);

  const classes = useStyles();

  const handlePageChange = (event, value) => {
    setPage(value);
    if (keyword) {
      keyword = keyword.split('?keyword=')[1].split('&')[0]; // example: ?keyword=اکبر&page=1  ===> اکبر
    }
    history.push(`/artworks/?keyword=${keyword}&page=${value}`);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {loading === undefined ? (
        <Loader />
      ) : error ? (
        <Message variant="outlined" severity="error">
          {error}
        </Message>
      ) : (
        <>
          <Grid container direction="row" spacing={0}>
            <Grid item xs sx={{ marginTop: 0 }}>
              <Divider style={{ margin: 'auto' }} variant="middle" />
              <SideFilter name="مدیوم" />
              <SideFilter name="سایز" />
              <SideFilter name="قیمت" />
              <SideFilter name="تعداد" />
            </Grid>
            <Grid item xs={9} className={classes.root}>
              <Box sx={{ overflowY: 'scroll' }}>
                <Divider style={{ marginBottom: 30 }} variant="middle" />
                <ImageList
                  variant="masonry"
                  cols={3}
                  gap={30}
                  sx={{ paddingRight: 5 }}
                >
                  {artworks.map((artwork) => (
                    <ArtCard key={artwork._id} artwork={artwork} />
                  ))}
                </ImageList>
              </Box>
              <Grid>
                {pages > 1 && (
                  <Pagination
                    count={pages}
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="secondary"
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Hidden mdUp>
              <Grid container>
                <Paper className={classes.responsive} elevation={0}>
                  {artworks.map((artwork) => (
                    <Grid key={artwork._id}>
                      <Paper className={classes.paper}>
                        <ArtCard artwork={artwork} />
                      </Paper>
                    </Grid>
                  ))}
                </Paper>
              </Grid>
            </Hidden>
          </Grid>
        </>
      )}
    </div>
  );
}

export default ArtworksList;
