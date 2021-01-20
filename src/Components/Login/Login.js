import React from 'react';
import axios from 'axios';

import './Login.css';
import { AuthContext } from '../../App';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import purple from '@material-ui/core/colors/purple';

export const Login = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    username: '',
    password: '',
    accessToken: '',
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);
  const inputChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  // componentDidMount() {
  //   this.postDataHandler();
  // }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    const userLogin = {
      username: data.username,
      password: data.password,
      type: 'USER_PASSWORD_AUTH',
    };
    const postHeaders = {
      environment: 'mock',
      'Content-type': 'application/json',
    };
    axios
      .post('https://api.bybits.co.uk/auth/token', userLogin, {
        headers: postHeaders,
      })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response;
        }
        throw response;
      })
      .then((resJson) => {
        dispatch({
          type: 'LOGIN',
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
    // .then((response) => {
    //   console.log(response.data.access_token);
    //   this.setState({
    //     accessToken: response.data.access_token,
    //   });
    //   console.log(this.state.accessToken);
    // });
  };

  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar style={{ backgroundColor: purple[200] }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>

          <form onSubmit={formSubmitHandler}>
            <Grid className="textInput">
              <TextField
                fullWidth
                label="User Name"
                placeholder="Enter User Name"
                required
                value={data.username}
                onChange={inputChangeHandler}
                name="username"
                id="username"
              ></TextField>
              <Grid className="textInput">
                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  required
                  value={data.password}
                  onChange={inputChangeHandler}
                  name="password"
                  id="password"
                ></TextField>
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disabled={data.isSubmitting}
            >
              {data.errorMessage && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <span>{data.errorMessage}</span>
                </Alert>
              )}
              {data.isSubmitting ? 'Loading' : 'Sign in'}
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
