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

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ selectedFilter: event.target.value });
    }

    render() {
        return (
            <FruitBasket handleChange={this.handleFilterChange} filter={this.state.selectedFilter} />
        )
    }
}

export default App;
