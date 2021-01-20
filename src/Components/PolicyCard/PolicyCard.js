import React from 'react';

import './PolicyCard.css';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

export const PolicyCard = ({ props }) => {
  // const getDataHandler = () => {
  //   const getHeaders = {
  //     environment: 'mock',
  //     Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs',
  //     'Content-type': 'application/json',
  //   };
  //   axios
  //     .get('https://api.bybits.co.uk/policys/details', {
  //       headers: getHeaders,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         policyRef: response.data.policy.policy_ref,
  //         coverType: response.data.policy.cover,
  //         car:
  //           response.data.vehicle.colour +
  //           response.data.vehicle.make +
  //           response.data.vehicle.model,
  //         address:
  //           response.data.policy.address.line_1 +
  //           response.data.policy.address.line_2 +
  //           response.data.policy.address.postcode,
  //       });
  //     });
  // };
  return (
    <Grid>
      <Paper elevation={10} className="policyStyle">
        <Grid align="center" style={{ color: purple[200] }}>
          <h2>My Policy</h2>
          <Grid>
            <Card style={{ border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Policy Reference:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {props.policyRef}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Cover Type:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {props.coverType}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Car:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {props.car}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Address:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {props.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PolicyCard;
