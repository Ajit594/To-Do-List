// filepath: c:\Users\hp\OneDrive\Desktop\todocontextlocal\src\components\Logout.jsx
import React from 'react';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default Logout;