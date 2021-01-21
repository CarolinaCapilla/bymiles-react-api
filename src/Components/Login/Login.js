import React from 'react';

import LoginForm from '../LoginForm/LoginForm';
import { AuthContext } from '../../App';

export const Login = () => {
  const { dispatch } = React.useContext(AuthContext);

  const initialState = {
    username: '',
    password: '',
    accessToken: '',
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);

  const inputChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // POST request to API
  const postLoginHandler = () => {
    const userLogin = {
      username: data.username,
      password: data.password,
      type: 'USER_PASSWORD_AUTH',
    };
    const postHeaders = {
      environment: 'mock',
      'Content-type': 'application/json',
    };
    fetch('https://api.bybits.co.uk/auth/token', {
      method: 'post',
      headers: postHeaders,
      body: JSON.stringify({
        userLogin,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: 'LOGIN',
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    postLoginHandler();
  };

  return (
    <LoginForm
      username={data.username}
      submitForm={formSubmitHandler}
      userInput={inputChangeHandler}
      password={data.password}
      passwordInput={inputChangeHandler}
      button={data.isSubmitting}
      error={data.errorMessage}
    ></LoginForm>
  );
};

export default Login;
