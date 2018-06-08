import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter handleChange={this.props.handleChange} filters={this.props.filters} />
        <FilteredFruitList filter={this.props.selectedFilter} fruit={this.props.fruit} />
      </div>
    );
  }
}

export default FruitBasket;
