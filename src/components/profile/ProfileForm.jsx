/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Grid, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import { fetchUserDetails, updateUserProfile } from '../../actions/index';
import Message from '../Message';
import Loader from '../Loader';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

const useStyles = makeStyles(() => ({
  root: {
    '& label.Mui-focused': {
      color: 'secondary',
      borderColor: 'cyan',
    },
    '& .MuiFilledInput': {
      backgroundColor: 'green',
    },
    '& .MuiFilledInputInput-root': {
      '& fieldset': {
        borderColor: 'cyan',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'cyan',
      },
    },
  },
}));

function ProfileForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else if (!user || !user.firstName || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(fetchUserDetails('profile'));
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [dispatch, history, userInfo, user, success]);

  const handleSubmit = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300);
    if (password !== confirmPassword) {
      setMessage('پسورد متفاوت وارد شده است');
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstName,
          lastName,
          email,
          password,
        })
      );
      setMessage('');

      dispatch(fetchUserDetails('profile'));
    }
  };

  const classes = useStyles();

  return (
    <div style={{ maxWidth: 600 }}>
      <form onSubmit={handleSubmit} noValidate className={classes.root}>
        <Paper style={{ padding: 10 }} elevation={0}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12} />

            <Grid item xs={12}>
              <TextField
                label="نام"
                name="firstName"
                value={firstName || ''}
                margin="none"
                variant="filled"
                placeholder="نام خود را وارد کنید"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="نام خانوادگی"
                name="lastName"
                value={lastName || ''}
                margin="none"
                variant="filled"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="ایمیل"
                name="email"
                type="email"
                value={email || ''}
                margin="none"
                variant="filled"
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="پسوزد"
                name="password"
                value={password || ''}
                margin="none"
                variant="filled"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit">
                ذخیره
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
      {message && <Message severity="error">{message}</Message>}
      {error && <Message severity="error">{error}</Message>}
      {loading && <Loader />}
    </div>
  );
}

export default ProfileForm;
