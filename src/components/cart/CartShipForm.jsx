/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Grid,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchUserDetails, updateUserProfile } from '../../actions/userAction';
import Message from '../Message';
import Loader from '../Loader';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

function CartShipForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    province: '',
    phoneNumber: '',
    postalCode: '',
    address: '',
  });

  const userDetails = useSelector((state) => state.userDetails);
  const {
    error: profileError,
    loading: profileLoading,
    success: profileSuccess,
    user,
  } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // value change
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else if (!profileSuccess) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(fetchUserDetails('profile'));
    } else {
      setValues({
        ...values,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        city: user.city,
        province: user.province,
        phoneNumber: user.phoneNumber,
        postalCode: user.postalCode,
        address: user.address,
      });
    }
  }, [dispatch, history, userInfo, user, profileSuccess]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    country: Yup.string().required('Please enter your country'),
    city: Yup.string().required('Please enter your city'),
    province: Yup.string().required('Please enter your city'),
    phoneNumber: Yup.string().required('Please enter your phone number'),
    postalCode: Yup.string().required('Please enter your postal code'),
    address: Yup.string().required('Please enter your address'),
    // username: Yup.string()
    //   .required('Username is required')
    //   .min(6, 'Username must be at least 6 characters')
    //   .max(20, 'Username must not exceed 20 characters'),
    // email: Yup.string().required('Email is required').email('Email is invalid'),
    // password: Yup.string()
    //   .required('Password is required')
    //   .min(6, 'Password must be at least 6 characters')
    //   .max(40, 'Password must not exceed 40 characters'),
    // confirmPassword: Yup.string()
    //   .required('Confirm Password is required')
    //   .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], ''),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('JSON.stringify(data, null, 2)');
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <Paper sx={{ padding: 2 }} elevation={0}>
          <Grid container direction="row" alignItems="flex-start" spacing={2}>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="First Name"
                name="firstName"
                margin="none"
                variant="outlined"
                sx={{ width: '100%' }}
                onChange={handleChange('firstName')}
                {...register('firstName')}
                error={!!errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="Last Name"
                name="lastName"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                {...register('lastName')}
                error={!!errors.lastName}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                onClickCapture={(e) => console.log(e)}
                label="Country"
                name="country"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('country')}
                {...register('country')}
                error={!!errors.country}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="City"
                name="city"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('city')}
                {...register('city')}
                error={!!errors.city}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="Province"
                name="province"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('province')}
                {...register('province')}
                error={!!errors.province}
              />
            </Grid>

            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="Postal Code"
                name="postalCode"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('postalCode')}
                {...register('postalCode')}
                error={!!errors.postalCode}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="Address"
                name="address"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('address')}
                {...register('address')}
                error={!!errors.address}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
              <TextField
                label="Phone"
                name="phoneNumber"
                margin="none"
                sx={{ width: '100%' }}
                variant="outlined"
                onChange={handleChange('phoneNumber')}
                {...register('phoneNumber')}
                error={!!errors.phoneNumber}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
                        onChange={(e) => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms ? `${errors.acceptTerms.message}` : ''}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%', marginTop: 5 }}>
              <Button
                variant="custom"
                color="primary"
                type="submit"
                sx={{ width: '100%' }}
                onClick={handleSubmit(onSubmit)}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
      {profileError && (
        <Message severity="profileError">{profileError}</Message>
      )}
      {profileLoading && <Loader />}
    </div>
  );
}

export default CartShipForm;
