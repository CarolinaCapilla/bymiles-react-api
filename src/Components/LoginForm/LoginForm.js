import React from 'react';

import './LoginForm.css';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import purple from '@material-ui/core/colors/purple';

const LoginForm = (props) => {
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar style={{ backgroundColor: purple[200] }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>

          <form onSubmit={props.form}>
            <Grid className="textInput">
              <TextField
                fullWidth
                label="User Name"
                placeholder="Enter User Name"
                required
                value={props.username}
                onChange={props.input}
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
                  value={props.password}
                  onChange={props.passwordInput}
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
              disabled={props.buttonSubmit}
            >
              {props.buttonSubmit ? 'Loading' : 'Sign in'}
            </Button>
          </form>
        </Grid>
      </Paper>
      {props.error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <span>{props.error}</span>
        </Alert>
      )}
    </Grid>
  );
};

export default LoginForm;
