// Core
import React from 'react';

// Components
import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';

// Styles
import Styles from './menu.module.css';

const Menu = () => (

  <>
    <div className = { Styles.menu }>
      <div className = 'container clearfix'>
        <Logo />
        <SearchForm />
      </div>
    </div>
  </>
);

export default Menu;
