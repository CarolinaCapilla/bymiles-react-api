import React, { Component } from 'react';
import axios from 'axios';

import './PolicyDetails.css';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

class PolicyDetails extends Component {
  state = {
    policyRef: '',
    coverType: '',
    car: '',
    address: '',
  };
  componentDidMount() {
    this.getDataHandler();
  }
  getDataHandler = () => {
    const getHeaders = {
      environment: 'mock',
      Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs',
      'Content-type': 'application/json',
    };
    axios
      .get('https://api.bybits.co.uk/policys/details', {
        headers: getHeaders,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          policyRef: response.data.policy.policy_ref,
          coverType: response.data.policy.cover,
          car:
            response.data.vehicle.colour +
            response.data.vehicle.make +
            response.data.vehicle.model,
          address:
            response.data.policy.address.line_1 +
            response.data.policy.address.line_2 +
            response.data.policy.address.postcode,
        });
      });
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
                    {this.state.policyRef}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Cover Type:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    {this.state.coverType}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Car:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    {this.state.car}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" style={{ color: grey[900] }}>
                    Address:
                  </Typography>
                  <Typography style={{ color: grey[600] }}>
                    {this.state.address}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default PolicyDetails;
