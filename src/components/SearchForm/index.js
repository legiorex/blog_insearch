// Core
import React from 'react';

// Styles
import Styles from './searchForm.module.css';

const SearchForm = () => (

  <div className = 'pull-right' id = { Styles.searchForm }>
    <form action = '#' method = 'get'>
      <input
        name = 'Search'
        // onBlur = "if (this.value == '') this.value = 'Search';"
        // onFocus = "if (this.value == 'Search') this.value = '';"
        type = 'text'
        value = 'Search'
      />
    </form>
  </div>

);

export default SearchForm;
