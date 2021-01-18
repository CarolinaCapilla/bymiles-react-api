import React, { Component } from 'react'
import './Login.css'

import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import purple from '@material-ui/core/colors/purple'
class Login extends Component {
  state = {
    username: '',
    password: '',
  }

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
                id="standard-basic"
                label="User Name"
                placeholder="Enter User Name"
                required
              ></TextField>
              <Grid className="textInput">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Sign in
          </Button>
        </Paper>
      </Grid>
    )
  }
}

export default Login
