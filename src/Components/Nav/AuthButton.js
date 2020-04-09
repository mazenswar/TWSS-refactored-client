import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function AuthButton({ user }) {
  function handleLogout() {
    localStorage.clear();
    dispatch({ type: 'CLEAR_USER' });
  }
  user ? (
    <Link to="/login" id="auth-button">
      Login
    </Link>
  ) : (
    <Link to="/logout" id="auth-button" onClick={handleLogout}>
      Logout
    </Link>
  );
}
