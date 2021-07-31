import React from 'react';
import {
  Grid,
  Button,
  Typography,
  IconButton,
  Box,
  TextField,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormControl from '@material-ui/core/FormControl';

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow({ item1, item2, item3 }) {
  return (
    <>
      <Grid item xs={2} />
      <Grid item xs={3}>
        <Link to="#">
          <Item>{item1}</Item>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="#">
          <Item>{item2}</Item>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="#">
          <Item>{item3}</Item>
        </Link>
      </Grid>
    </>
  );
}

FormRow.propTypes = {
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
};

const Footer = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      item
      xs={12}
      spacing={1}
      sx={{ padding: 3, backgroundColor: '#A2A28F' }}
    >
      <Grid xs={10} item>
        <Grid container item spacing={1}>
          <FormRow item1="Photographers" item2="About Us" item3="Terms" />
        </Grid>
        <Grid container item spacing={1}>
          <FormRow item1="Photos" item2="Submissions" item3="Career" />
        </Grid>
        <Grid container spacing={1}>
          <FormRow item1="Galleries" item2="Policy" item3="Support" />
        </Grid>
        <Grid container spacing={1}>
          <FormRow item1="‌Books" item2="Contact" item3="Help Center" />
        </Grid>
      </Grid>

      <Grid container direction="column" xs={2} item>
        <Grid item>
          <IconButton
            sx={{ backgroundColor: '#99CCCC' }}
            aria-label="Instagram"
          >
            <InstagramIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#99CCCC' }} aria-label="Telegram">
            <TelegramIcon sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={{ backgroundColor: '#99CCCC' }} aria-label="LinkedIn">
            <LinkedInIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#99CCCC' }} aria-label="Twitter">
            <TwitterIcon sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>

    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ padding: 3, backgroundColor: '#99CCCC', textAlign: 'left' }}
    >
      <Grid item xs={2}>
        <img
          src="/static/VADEE Icon-01.svg"
          alt="logo"
          style={{ width: '30%' }}
        />
      </Grid>
      <Grid container direction="column" item xs={8} spacing={2}>
        <Grid item>
          <Typography sx={{ color: 'white', paddingTop: 2 }} variant="body1">
            CThe textbox may contain any arbitrary value, but it is advantageous
            to suggest possible values to the user,The textbox may contain any
            arbitrary value, but it is advantageous to suggest possible values
            to the usery suggest similar.
          </Typography>
        </Grid>
        <Grid item container>
          <FormControl fullWidth>
            <form style={{ display: 'flex', width: '100%' }}>
              <Grid item xs={8}>
                <TextField
                  sx={{ background: 'white' }}
                  size="small"
                  fullWidth
                  label="Email"
                  id="fullWidth"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  sx={{
                    color: 'white',
                    backgroundColor: 'black',
                    padding: '0.45rem',
                    marginLeft: 1,
                  }}
                  type="submit"
                >
                  Subscribe
                </Button>
              </Grid>
            </form>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>

    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      sx={{ padding: 3, backgroundColor: 'black' }}
    >
      <Grid item xs={2}>
        <img
          src="/static/logo.svg"
          alt="Paella dish"
          style={{ width: '80%' }}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography color="secondary" variant="subtitle2">
          <strong> @ Vadee.art {new Date().getFullYear()}</strong> | Web
          Development.
        </Typography>
      </Grid>
    </Grid>
  </Box>
);
export default Footer;
