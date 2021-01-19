import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import purple from '@material-ui/core/colors/purple';
class Login extends Component {
  state = {
    username: '',
    password: '',
    type: '',
  };

  postDataHandler = () => {
    const userLogin = {
      username: this.state.username,
      password: this.state.password,
      type: 'USER_PASSWORD_AUTH',
    };
    const headers = {
      environment: 'mock',
      'Content-type': 'application/json',
    };
    axios
      .post('https://api.bybits.co.uk/auth/token', userLogin, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log('Login successfull');
        }
        this.setState({
          type: response.data.access_token,
        });
      });
  };

  render() {
    return (
      <Grid>
        <Paper elevation={10} className="paperStyle">
          <Grid align="center">
            <Avatar style={{ backgroundColor: purple[200] }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
            <Grid className="textInput">
              <TextField
                fullWidth
                label="User Name"
                placeholder="Enter User Name"
                required
              ></TextField>
              <Grid className="textInput">
                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={this.postDataHandler}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </Paper>
      </Grid>
    );
  }
}

export default Login;
