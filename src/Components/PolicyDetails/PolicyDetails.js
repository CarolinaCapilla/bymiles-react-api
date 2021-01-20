import React from 'react';

// import { AuthContext } from '../../App';
// import PolicyCard from '../PolicyCard/PolicyCard';

const initialState = {
  policyDetails: [],
  isFetching: false,
  hasError: false,
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
        policyDetails: action.payload,
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
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      {state.policyDetails.length > 0 }
    </div>
  )
};

export default PolicyDetails;
