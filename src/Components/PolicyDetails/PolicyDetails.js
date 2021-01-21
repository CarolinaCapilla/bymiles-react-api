import React from 'react';

import './PolicyDetails.css';
import { AuthContext } from '../../App';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

export const PolicyDetails = () => {
  const initialState = {
    policyRef: '',
    coverType: '',
    car: '',
    address: '',
    isFetching: false,
    hasError: false,
    errorMessage: null,
  };
  const { state: authState } = React.useContext(AuthContext);
  const [data, setData] = React.useState(initialState);
  const reducer = (data, action) => {
    switch (action.type) {
      case 'FETCH_POLICY_REQUEST':
        return {
          ...data,
          isFetching: true,
          hasError: false,
        };
      case 'FETCH_POLICY_SUCCESS':
        return {
          ...data,
          isFetching: false,
          songs: action.payload,
        };
      case 'FETCH_POLICY_FAILED':
        return {
          ...data,
          hasError: true,
          isFetching: false,
        };
      default:
        return data;
    }
  };
  const [, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({
      type: 'FETCH_POLICY_REQUEST',
    });
    const getHeaders = {
      environment: 'mock',
      Authorization: `Bearer ${authState.access_token}`,
      'Content-type': 'application/json',
    };
    fetch('https://api.bybits.co.uk/policys/details', {
      headers: getHeaders,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((resJson) => {
        console.log(resJson);
        setData({
          policyRef: resJson.policy.policy_ref,
          coverType: resJson.policy.cover,
          car:
            resJson.vehicle.make +
            resJson.vehicle.model +
            resJson.vehicle.colour +
            resJson.vehicle.reg,
          address:
            resJson.policy.address.line_1 +
            resJson.policy.address.line_2 +
            resJson.policy.address.postcode,
        });
        dispatch({
          type: 'FETCH_POLICY_SUCCESS',
          payload: resJson,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_POLICY_FAILED',
          errorMessage: error,
        });
      });
  }, [authState.access_token]);

  const formattedPolicyRef = data.policyRef.replaceAll('-', ' ');
  // const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const makeOfCar = data.car.substr(0, 5);
  const makeOfCarCapitalized =
    makeOfCar.charAt(0).toUpperCase() + makeOfCar.slice(1);
  const modelCar = data.car.charAt(5);
  const colourCar = data.car.substr(6, 10);
  const colourCarCapitalized =
    colourCar.charAt(0).toUpperCase() +
    colourCar.slice(1, 5) +
    '-' +
    colourCar.slice(5);
  const carFormatted = `${makeOfCarCapitalized} ${modelCar} ${colourCarCapitalized}`;

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
                  {formattedPolicyRef}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Cover Type:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {data.coverType}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Car:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {carFormatted}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Address:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {data.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PolicyDetails;
