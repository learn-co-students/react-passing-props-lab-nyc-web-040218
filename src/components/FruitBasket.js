import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, handleOnChange})=>{

    return (

      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={handleOnChange} />

          <FilteredFruitList
            filter={currentFilter}
            fruit ={fruit}
             />


      </div>
    );
}

export default FruitBasket;

FruitBasket.defaultProps = {
fruit: [],
filters:[],
currentFilter : null,
updateFilterCallback : function (){}
}
