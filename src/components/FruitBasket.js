import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';



  const FruitBasket = ({filters, fruit, currentFilter, updateFilterCallback}) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={updateFilterCallback} filters={filters} />
        <FilteredFruitList
          filter={currentFilter} 
          fruit={fruit}/>
      </div>
    );
  }

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: null
  }

export default FruitBasket;
