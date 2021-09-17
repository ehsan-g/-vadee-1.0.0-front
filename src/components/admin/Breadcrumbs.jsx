import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function AdminBreadcrumbs() {
  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      to="/admin-panel/users"
      style={{ textDecoration: 'none', color: '#5f5f5f' }}
    >
      کاربران
    </Link>,

    <Link
      key="2"
      color="inherit"
      to="/admin-panel/artworks"
      style={{ textDecoration: 'none', color: '#5f5f5f' }}
    >
      آثار
    </Link>,
    <Link
      key="3"
      color="inherit"
      to="/admin-panel/orders"
      style={{ textDecoration: 'none', color: '#5f5f5f' }}
    >
      فروش آثار
    </Link>,
    <Typography
      key="1"
      color="inherit"
      to="/admin-panel/artists"
      style={{ textDecoration: 'none', color: '#d0d0d0' }}
    >
      هنرمندان
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
