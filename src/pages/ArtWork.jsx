/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import Hidden from '@mui/material/Hidden';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Typography, Button, Container, Divider } from '@mui/material';
import { Link, useHistory, useParams } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { fetchOneArtWork } from '../actions/artworkAction';
import { addToCart } from '../actions/cartAction';
import Dialog from '../components/Dialog';
import TheTab from '../components/TheTab';
import { favArtwork } from '../actions/userAction';
import CarouselArtist from '../components/carousel/CarouselArtists';
// import Carousel2 from '../../components/Carousel2';
// import Carousel3 from '../../components/Carousel3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 100,
    marginBottom: 100,
  },
  container: {
    display: 'grid',
  },
  paper: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '16px',
    marginLeft: theme.spacing(2),
  },
}));

// match params has the id from the router /:workId
function Artwork() {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { workId } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const theArtwork = useSelector((state) => state.theArtwork);
  const { error, loading, success, artwork } = theArtwork;

  const theCart = useSelector((state) => state.theCart);
  const { loadingCart } = theCart;

  const [isFav, setIsFav] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  useEffect(() => {
    if (user && success) {
      for (let i = 0; i < artwork.favorites.length; i++) {
        if (artwork.favorites[i] === user._id) {
          setIsFav(true);
        } else {
          setIsFav(true);
        }
      }
    }
  }, [user, artwork]);

  useEffect(() => {
    if (!success && workId) {
      dispatch(fetchOneArtWork(workId));
    }
  }, [dispatch, workId, success]);

  useEffect(() => {
    if (artwork && artwork.quantity < 1) {
      setDisabled(true);
    }
  }, [artwork]);

  const onAddToCart = () => {
    if (userInfo) {
      dispatch(addToCart(workId));
      history.push(`/cart/shippingAddress/${workId}?title=${artwork.title}`);
    } else {
      history.push(`/login`);
    }
  };

  const classes = useStyles();

  const renderElement = () => {
    const theArt = artwork;
    return (
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Grid container direction="row" justifyContent="flex-start">
          <Grid item xs={2} md={1} sx={{ position: 'relative', marginLeft: 3 }}>
            <Button
              size="small"
              // sx={{ textTransform: 'none' }}
              onClick={() => dispatch(favArtwork(artwork._id))}
              sx={{
                position: 'absolute',
                bottom: 0,
                marginBottom: 3,
                left: 0,
                fontSize: 15,
                textTransform: 'none',
              }}
            >
              {isFav ? 'Save' : 'UnSave'}
            </Button>
            <Button
              size="small"
              sx={{
                position: 'absolute',
                bottom: 0,
                marginBottom: 0,
                left: 0,
                fontSize: 15,
                textTransform: 'none',
              }}
              onClick={() => dispatch(favArtwork(artwork._id))}
            >
              Share
            </Button>
          </Grid>
          <Grid item xs={8} md={6} sx={{ textAlign: 'center' }}>
            <img
              src={`${theArt.image}`}
              alt="Art work"
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Paper className={classes.paper} elevation={0}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={4} md={2}>
                  <img
                    style={{ maxWidth: '55px', marginTop: 5 }}
                    src={theArt.artist && theArt.artist.photo}
                    alt="artist"
                  />
                </Grid>
                <Grid item xs={6} md>
                  <Typography variant="subtitle2">
                    {theArt.artist &&
                      `${theArt.artist.firstName} ${theArt.artist.lastName}`}
                  </Typography>
                  <Typography>
                    {theArt.artist &&
                      `${theArt.artist.nationality}, ${theArt.artist.birthday}`}
                  </Typography>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: '#A2A28F',
                      color: 'black',
                      lineHeight: '0.4rem',
                      '&:hover': {
                        backgroundColor: 'black',
                      },
                    }}
                    disabled={disabled}
                  >
                    Follow
                  </Button>
                </Grid>
              </Grid>
              <Grid>
                <Divider
                  className={classes.divider}
                  style={{ marginTop: 20, marginBottom: 20 }}
                />
                <Typography color="#666666" variant="h6">
                  {theArt.title}
                </Typography>
                <Typography color="#666666" variant="body2">
                  {theArt.subtitle}
                </Typography>
                <Typography color="#666666" variant="body2">
                  {theArt.year}
                </Typography>
                <Typography color="#666666" variant="body2">
                  {theArt.medium}
                </Typography>
                <Typography color="#666666" variant="body2">
                  {theArt.unit === '0' && ' in '}
                  {theArt.unit === '1' && ' cm '}
                  {!theArt.unit && ' cm '}
                  <span
                    style={{
                      position: 'absolute',
                      direction: 'ltr',
                      paddingRight: 2,
                    }}
                  >
                    {theArt.width} x {theArt.height}
                  </span>
                </Typography>
                {theArt.editionNum > 0 && (
                  <Typography variant="body2">
                    {theArt.editionNum} from {theArt.editionSize} Number
                  </Typography>
                )}
                <Typography color="#666666" variant="body2">
                  {`${theArt.quantity} Remaining`}
                </Typography>
              </Grid>
              <Divider
                className={classes.divider}
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <Typography
                variant="body2"
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <span style={{ position: 'absolute' }}>$ {theArt.price}</span>
              </Typography>
              <Button
                onClick={(e) => onAddToCart(e)}
                variant="contained"
                type="submit"
                fullWidth
                disabled={disabled}
              >
                {loadingCart ? <CircularProgress /> : `Purchase Artwork`}
              </Button>

              <Link to="/">
                <Typography variant="subtitle2">{theArt.name}</Typography>
              </Link>
              <Typography variant="subtitle1" color="#666666">
                <RoomOutlinedIcon />
                {theArt.art_location}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#666666"
                style={{ display: 'flex' }}
              >
                <MilitaryTechOutlinedIcon />
                <Dialog />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="baseline"
        >
          <Hidden mdDown>
            <Grid item xs={1} sx={{ position: 'relative', marginLeft: 3 }}>
              <Typography variant="subtitle2" sx={{ marginTop: 5 }}>
                {theArt && theArt.artist && `${theArt.artist.firstName}`} <br />
                {theArt && theArt.artist && `${theArt.artist.lastName}`} <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: '#A2A28F',
                    color: 'black',
                    marginTop: 1,
                    lineHeight: '0.4rem',
                    '&:hover': {
                      backgroundColor: 'black',
                    },
                  }}
                  disabled={disabled}
                >
                  Follow
                </Button>
              </Typography>
            </Grid>
          </Hidden>
          <Grid item xs={10} sx={{ marginLeft: 4 }}>
            <TheTab theArt={theArt} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          sx={{ marginTop: 8 }}
        >
          <Grid item sm={12} md={1}>
            <Typography variant="subtitle1">Artists</Typography>
            <Typography variant="subtitle1">Artworks</Typography>
          </Grid>
          <Grid item sm={12} md={10} sx={{ marginLeft: 4 }}>
            {theArt && theArt.artist && (
              <CarouselArtist artistId={theArt.artist._id} />
            )}
          </Grid>
        </Grid>
      </Container>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {loading === undefined ? (
          <Loader />
        ) : error ? (
          <Message variant="outlined" severity="error">
            {error}
          </Message>
        ) : (
          renderElement()
        )}
      </Grid>
    </div>
  );
}

export default Artwork;
