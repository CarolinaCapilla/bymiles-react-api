import React from 'react';

import './PolicyDetails.css';
import { AuthContext } from '../../App';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

const initialState = {
  policyDetails: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POLICY_REQUEST':
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };
    case 'FETCH_POLICY_SUCCESS':
      return {
        ...state,
        isFetching: false,
        songs: action.payload,
      };
    case 'FETCH_POLICY_FAILED':
      return {
        ...state,
        hasError: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
export const PolicyDetails = () => {
  const { state: authState } = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // const [data, setData] = React.useState(initialState);
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
    console.log(state);
  }, [authState.access_token]);

  return (
    <Grid>
      <Paper elevation={10} className="policyStyle">
        <Grid align="center" style={{ color: purple[200] }}>
          <h2>My Policy</h2>
          <Grid>
            <Card style={{ border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ color: grey[900] }}
                  policyref={state.policyDetails}
                >
                  Policy Reference:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {state.policyRef}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Cover Type:
                </Typography>
                <Typography style={{ color: grey[600] }}>
                  {state.coverType}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Car:
                </Typography>
                <Typography style={{ color: grey[600] }}></Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" style={{ color: grey[900] }}>
                  Address:
                </Typography>
                <Typography style={{ color: grey[600] }}></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PolicyDetails;
