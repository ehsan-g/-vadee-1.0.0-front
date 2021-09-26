/* eslint-disable camelcase */
import React from 'react';
import {
  Grid,
  Button,
  Typography,
  IconButton,
  Box,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormControl from '@mui/material/FormControl';

const Footer = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'black',
        textAlign: 'left',
      }}
    >
      <Grid item xs={2}>
        <img
          src="/static/VADEE Icon-02.svg"
          alt="Logo"
          style={{ maxWidth: '35%' }}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ paddingTop: 2 }} variant="subtitle1">
          CThe textbox may contain any arbitrary value, but it is advantageous
          to suggest possible values to the user,The textbox may contain any
          arbitrary value, but it is advantageous to suggest possible values to
          the usery suggest similar.
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={2}
      >
        <Grid item>
          <Typography variant="subtitle1">About Us</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Contract</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Help Center</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={2}
      >
        <Grid item>
          <Typography variant="subtitle1">Terms & Conditions</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Copyright Policy</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Privacy Policy</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Cookie Policy</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={1}
      >
        <Grid item>
          <IconButton>
            <LinkedInIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <InstagramIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <FacebookIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={3}
      >
        <Grid item xs={2}>
          <Typography sx={{ paddingTop: 2 }} variant="subtitle1">
            CThe textbox may contain any arbitrary value, but it is advantageous
            to suggest possible values to the user,The textbox may contain any
            arbitrary value,
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ marginTop: 2 }}>
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
              <Grid item xs={4}>
                <Button
                  sx={{
                    color: 'white',
                    width: '100%',
                    padding: '0.5rem !important',
                  }}
                  variant="contained"
                  type="submit"
                >
                  Subscribe
                </Button>
              </Grid>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>

    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      sx={{ paddingLeft: 10, paddingRight: 10, backgroundColor: 'black' }}
    >
      <Grid item xs={2}>
        <img src="/static/logo.svg" alt="Logo" style={{ maxWidth: '50%' }} />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ paddingTop: 2 }} variant="subtitle1">
          {`@ Vadee.art ${new Date().getFullYear()}  All Rights Reserved.`}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ display: 'inline-flex', margin: 'auto' }}
      >
        <Typography
          sx={{ color: 'white', marginRight: 1 }}
          variant="subtitle1"
          component="span"
        >
          $
        </Typography>
        <div>
          <img src="/static/usa.png" alt="Logo" style={{ maxWidth: '20px' }} />
        </div>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: 'end' }}>
        <img src="/static/visaa.png" alt="Logo" style={{ maxWidth: '30%' }} />
      </Grid>
    </Grid>
  </Box>
);
export default Footer;
