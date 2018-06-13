import React, { Component }  from 'react';
import PropTypes from 'prop-types'

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
      <FilteredFruitList
        filter={props.currentFilter} items={props.items}/>
    </div>
  );
}

export default FruitBasket;

FruitBasket.defaultProps = {
  fruit: PropTypes.array,
  filters: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func
}
