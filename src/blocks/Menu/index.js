// Core
import React from 'react';

// Components
import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';
import Menu from '../../components/Menu';

// Styles
import Styles from './menuBlock.module.css';

const MenuBlock = () => (

  <>
    <div className = { Styles.menu }>
      <div className = 'container clearfix'>
        <Logo />
        <SearchForm />
        <Menu />
      </div>
    </div>
  </>
);

export default MenuBlock;
