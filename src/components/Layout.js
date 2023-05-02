import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const Layout = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/"><span>Home</span></Link></li>
      <li><Link to="/calculator"><span>Calculator</span></Link></li>
      <li><Link to="/quote"><span>Qoute</span></Link></li>
      <li>Calculator</li>
      <li>Quote</li>
    </ul>
  </nav>
);

export default Layout;
