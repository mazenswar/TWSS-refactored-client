import React from 'react';
import { Link } from 'react-router-dom';

export default function({ user }) {
  return user.id ? (
    <Link to="/profile">
      <img id="user-profile-icon" src={user.profile_img} alt="user-icon" />
    </Link>
  ) : (
    <Link to="/auth">
      <img
        id="user-profile-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="placeholder-user"
      />
    </Link>
  );
}
