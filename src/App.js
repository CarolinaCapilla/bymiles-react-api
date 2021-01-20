import React from 'react';

import Login from './Components/Login/Login';
import PolicyDetails from './Components/PolicyDetails/PolicyDetails';
import './App.css';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  access_token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem(
        'access_token',
        JSON.stringify(action.payload.access_token)
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        access_token: action.payload.access_token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {!state.isAuthenticated ? <Login /> : <PolicyDetails />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
