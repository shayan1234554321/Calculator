import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/calculator">CALCULATOR</Link></li>
          <li><Link to="/quote">QUOTE</Link></li>
        </ul>
      </div>
    </nav>
  );
}
