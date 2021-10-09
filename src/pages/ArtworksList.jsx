/* eslint-disable prefer-destructuring */
/* eslint-disable no-nested-ternary */
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import { Grid, Box, Paper, Hidden, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import ArtCard from '../components/ArtCard';
import { fetchAllArtWorks } from '../actions/artworkAction';
import { cleanLocalCart } from '../actions/cartAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ARTWORK_DETAILS_RESET } from '../constants/artworkConstants';
import SideFilter from '../components/SideFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
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

  const artworksList = useSelector((state) => state.artworks);
  const { error, loading, artworks, pages } = artworksList;

  const favArtwork = useSelector((state) => state.favArtwork);
  const { artworkId } = favArtwork;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(fetchAllArtWorks(keyword));
  }, [dispatch, keyword, artworkId]);

  // clean up
  useEffect(() => {
    dispatch(cleanLocalCart());
    dispatch({ type: ARTWORK_DETAILS_RESET });
    return () => {
      dispatch(cleanLocalCart());
    };
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setPage(value);
    if (keyword) {
      keyword = keyword.split('?keyword=')[1].split('&')[0]; // example: ?keyword=اکبر&page=1  ===> اکبر
    }
    history.push(`/artworks/?keyword=${keyword}&page=${value}`);
  };

  const classes = useStyles();

  return (
    <div style={{ minHeight: '100vh' }}>
      {!artworks ? (
        <Loader />
      ) : error ? (
        <Message variant="outlined" severity="error">
          {error}
        </Message>
      ) : (
        <Container>
          <Grid container direction="row">
            <Grid xs item>
              hi
            </Grid>
            <Grid xs={10} item>
              hi
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs sx={{ marginTop: 0 }}>
              <Divider style={{ margin: 'auto' }} variant="middle" />
              <SideFilter name="مدیوم" />
              <SideFilter name="سایز" />
              <SideFilter name="قیمت" />
              <SideFilter name="تعداد" />
            </Grid>
            <Grid item xs={10} className={classes.root}>
              <Box sx={{ overflowY: 'scroll' }}>
                <Divider style={{ marginBottom: 30 }} variant="middle" />
                <ImageList
                  variant="masonry"
                  cols={window.innerWidth < 800 ? 2 : 3}
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
            <Hidden smUp>
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
        </Container>
      )}
    </div>
  );
}

export default ArtworksList;
