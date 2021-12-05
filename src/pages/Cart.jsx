/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Tab, Grid, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CartShipForm from '../components/cart/CartShipForm';
import ProfileFavorite from '../components/profile/ProfileFavorite';
import PurchaseCard from '../components/cart/PurchaseCard';

export default function Cart() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        sx={{
          textAlign: 'left',
        }}
      >
        <Grid item xs={12} md={4}>
          <img src="/static/logo.svg" alt="logo" style={{ width: '60%' }} />
          <Typography variant="body1" color="primary">
            Change you lense, change your story
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        sx={{
          marginTop: 2,
          minHeight: '80vh',
        }}
      >
        <Grid item md={4} xs={10}>
          <PurchaseCard />
        </Grid>
        <Grid item md={8} xs={12}>
          <Box sx={{ typography: 'body1', padding: 5 }}>
            <TabContext value={value}>
              <Box sx={{ borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Shipping" value="1" />
                  <Tab label="Review" disabled value="2" />
                  <Tab label="Payment" value="3" />
                </TabList>
              </Box>

              <Box>
                <TabPanel value="1">
                  <CartShipForm />
                </TabPanel>
                <TabPanel value="2">{/* <AccountUserOrders /> */}</TabPanel>
                <TabPanel value="3">
                  <ProfileFavorite />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
