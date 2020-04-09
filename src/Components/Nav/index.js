import React from 'react';
import { useSelector } from 'react-redux';
import Links from './Links';
import ProfilePic from './ProfilePic';

export default function Nav() {
  const user = useSelector(state => state.user);

  return (
    <nav className="nav-bar">
      <Links user={user} />
      <ProfilePic user={user} />
    </nav>
  );
}
