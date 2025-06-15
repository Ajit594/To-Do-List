import React from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  return (
    <button onClick={handleLogin} className="btn btn-primary">
      Login
    </button>
  );
};

export default Login;