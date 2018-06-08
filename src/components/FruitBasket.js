import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({onUpdateFilter, filters, currentFilter, fruit}) =>
      <div className="fruit-basket">
        <Filter handleChange={onUpdateFilter} filters={filters} />
        <FilteredFruitList filter={currentFilter} fruit={fruit} />
      </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function(){}
}

export default FruitBasket;
