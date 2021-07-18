import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { styled, alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // marginTop: 4,
  color: 'inherit',
  border: 'solid 1px #A2A28F',
  height: 30,
  width: '98%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Header = () => (
  <Container maxWidth="lg" sx={{ marginTop: 2 }}>
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Grid container direction="row">
          <Grid item xs={3}>
            <img
              src="/static/logo.png"
              alt="Paella dish"
              style={{ width: '80%' }}
            />
            <Typography variant="subtitle2" color="secondary">
              Change you lense, change your story
            </Typography>
          </Grid>
          <Grid item xs md={6}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
          <Grid item xs container direction="row" spacing={2}>
            <Grid item>
              <Button variant="contained" color="secondary">
                Log in
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      spacing={1}
      sx={{ paddingLeft: 3 }}
    >
      <Grid item xs={10} container direction="row">
        <Grid item>
          <Link to="#" onClick={() => alert('در حال حاضر راه اندازی نشده است')}>
            <Typography variant="body1">Photographers</Typography>
          </Link>
        </Grid>
        <span
          style={{
            lineHeight: 0.7,
            fontWeight: 'bolder',
            fontSize: '2rem',
            marginLeft: 4,
            marginRight: 4,
            color: '#99CCCC',
          }}
        >
          .
        </span>
        <Grid item>
          <Link to="#" onClick={() => alert('در حال حاضر راه اندازی نشده است')}>
            <Typography variant="body1">Photos</Typography>
          </Link>
        </Grid>
        <span
          style={{
            lineHeight: 0.7,
            fontWeight: 'bolder',
            fontSize: '2rem',
            marginLeft: 4,
            marginRight: 4,
            color: '#99CCCC',
          }}
        >
          .
        </span>
        <Grid item>
          <Link to="#" onClick={() => alert('در حال حاضر راه اندازی نشده است')}>
            <Typography variant="body1">Galleries</Typography>
          </Link>
        </Grid>
        <span
          style={{
            lineHeight: 0.7,
            fontWeight: 'bolder',
            fontSize: '2rem',
            marginLeft: 4,
            marginRight: 4,
            color: '#99CCCC',
          }}
        >
          .
        </span>
        <Grid item>
          <Link to="#" onClick={() => alert('در حال حاضر راه اندازی نشده است')}>
            <Typography variant="body1">Locations</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs>
        <Button variant="outlined" color="primary">
          Sell
        </Button>
      </Grid>
    </Grid>
  </Container>
);

export default Header;
