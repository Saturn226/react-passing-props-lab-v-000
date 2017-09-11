import React, { Component } from 'react';


    
const FilteredFruitList  = ({fruit, filter}) =>{
  const list = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter);
  
      return (
        <ul className="fruit-list">
          {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
        </ul>
      );
}



FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all'
}

export default FilteredFruitList;
