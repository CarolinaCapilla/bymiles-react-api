import React from 'react';

import './PolicyCard.css';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

const PolicyCard = (props) => {
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
                  {props.cover}
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
      {props.error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <span>{props.error}</span>
        </Alert>
      )}
      {props.error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <span>{props.error}</span>
        </Alert>
      )}
    </Grid>
  );
};

export default PolicyCard;
