import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthRedirect() {
  return (
    <div className="auth-redirect">
      <Link to="/auth">
        Please register or login to participate in the conversation
      </Link>
    </div>
  );
}
