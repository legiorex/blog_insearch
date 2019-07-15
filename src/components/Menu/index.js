// Core
import React from 'react';

// Styles
import Styles from './menu.module.css';

const Menu = () => (

  <>
    <div className = 'pull-right'>
      <nav className = { `${Styles.navMenu} center` }>
        <ul>
          <li className = { `${Styles.first} scroll_btn` }>
            <a href = 'index.html'>Home</a>
          </li>
          <li className = 'scroll_btn'>
            <a href = 'blog.html'>Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default Menu;
