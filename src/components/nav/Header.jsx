import React, { useState } from 'react';
import { Grid, Button, Typography, Switch } from '@mui/material';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory } from 'react-router';

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

const Header = () => {
  const history = useHistory();

  const [current, setCurrent] = useState(1);

  const handleClick = (value) => {
    console.log(value);
    if (value === 'photographers') {
      setCurrent(0);
      history.push(`/${value}`);
    } else if (value === 'artworks') {
      setCurrent(1);
      history.push(`/${value}`);
    } else if (value === 'regions') {
      setCurrent(2);
      history.push(`/${value}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5, marginBottom: 5 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid container direction="row">
            <Grid item xs={12} md={4}>
              <img
                src="/static/logo.svg"
                alt="Paella dish"
                style={{ width: '80%' }}
              />
              <Typography variant="subtitle2" color="secondary">
                Change you lense, change your story
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
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
            <Grid item xs container direction="row" spacing={1}>
              <Grid item>
                <IconButton
                  size="medium"
                  sx={{
                    border: '1px solid #A2A28F',
                    borderRadius: '10%',
                    padding: '1px',
                  }}
                >
                  <NotificationsNoneIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="medium"
                  sx={{
                    border: '1px solid #A2A28F',
                    borderRadius: '10%',
                    padding: '1px',
                  }}
                >
                  <MailOutlineIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="medium"
                  sx={{
                    border: '1px solid #A2A28F',
                    borderRadius: '10%',
                    padding: '1px',
                  }}
                >
                  <PersonOutlineIcon fontSize="inherit" />
                </IconButton>
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
        <Grid item xs={12} container direction="row">
          <Grid item>
            <Link
              to="#"
              onClick={() => handleClick('photographers')}
              style={{ color: current === 0 && '#99CCCC' }}
            >
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
            <Link
              to="#"
              onClick={() => handleClick('artworks')}
              style={{ color: current === 1 && '#99CCCC' }}
            >
              <Typography variant="body1">Artworks</Typography>
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
            <Link
              to="#"
              onClick={() => handleClick('regions')}
              style={{ color: current === 2 && '#99CCCC' }}
            >
              <Typography variant="body1">Regions</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
