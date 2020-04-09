import React from 'react';
import { Link } from 'react-router-dom';
import emma from '../Assets/Emma.svg';

function Home() {
  return (
    <div className="index-about">
      <div className="home-logo-div">
        <img src={emma} alt="" />
      </div>

      <div className="home-about-subdiv">
        <h1> About The Project </h1>
        <p>
          A platform to celebrate and discuss the contibutions of women who made
          the world a better place
        </p>
      </div>

      <div className="landing-links-div">
        <Link to="/feminists" className="landing-link">
          Feminists
        </Link>
        <Link to="/posts" className="landing-link">
          Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
