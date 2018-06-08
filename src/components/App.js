import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
    constructor() {
        super();

        this.state = {
            filters: [],
            selectedFilter: null
        }
    }

    componentWillMount() {
        this.fetchFilters();
      }
    
      fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ selectedFilter: event.target.value });
    }

    render() {
        return (
            <FruitBasket handleChange={this.handleFilterChange} selectedFilter={this.state.selectedFilter} filters={this.state.filters} />
        )
    }
}

export default App;
