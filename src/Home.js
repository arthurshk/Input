import React from 'react';
import './Home.css';
import Genie from './images/genie.jpg';

const Home = () => {
  return (
    <div className="container">
      <h1 className="logo">Genie®</h1>
      <img src={Genie} alt="Genie" className="genie-image" style={{ width: '350px', height: '350px' }} />
      <input className="search-bar" type="text" placeholder="Search Events" />
    </div>
  );
}

export default Home;