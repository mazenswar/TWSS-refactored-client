import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUserAction } from '../Redux/Actions/userActions';
import { Link } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clearUserAction());
    localStorage.clear();
  }
  return (
    <Link id="auth-button" to="/" onClick={handleClick}>
      Logout
    </Link>
  );
}
