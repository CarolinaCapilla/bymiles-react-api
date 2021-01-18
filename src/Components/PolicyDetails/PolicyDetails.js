import React, { Component } from 'react';
import './PolicyDetails.css';

import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

class PolicyDetails extends Component {
  state = {
    policyReference: '',
    coverType: '',
    car: '',
    address: '',
  };

  render() {
    return (
      <Grid>
        <Paper elevation={10} className="paperStyle">
          <Grid
            align="center"
            style={{ color: purple[200] }}
            className="textInput"
          >
            <h2>My Policy</h2>
            <Grid>
              <Card style={{ border: 'none', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Policy Reference:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    apple orange pear
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Cover Type:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    Comprehensive
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Car:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    Tesla S-Black
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Address:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    69B Deptford High Street
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* <Card>
              <CardContent>
                <Typography variant="h6">Policy Reference:</Typography>
              </CardContent>
              <CardContent>Word of the day</CardContent>
              <CardContent>Word of the day</CardContent>
              <CardContent>Word of the day</CardContent>
            </Card> */}
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default PolicyDetails;
