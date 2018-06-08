import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.props.setSelectedFilter(event.target.value);
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter
          handleChange={this.handleFilterChange}
          setFilters={this.props.setFilters}
          getFilters={this.props.getFilters}
        />
        <FilteredFruitList
          getSelectedFilter={this.props.getSelectedFilter}
        />
      </div>
    );
  }
}

export default FruitBasket;
