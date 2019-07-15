// Core
import React from 'react';

// Styles
import Styles from './logo.module.css';

const Logo = () => (

  <>
    <div className = { `pull-left ${Styles.logo}` }>
      <a href = 'index.html'>
        <span className = { Styles.b1 }>w</span>
        <span className = { Styles.b2 }>h</span>
        <span className = { Styles.b3 }>i</span>
        <span className = { Styles.b4 }>t</span>
        <span className = { Styles.b5 }>e</span>
      </a>
    </div>
  </>
);

export default Logo;
