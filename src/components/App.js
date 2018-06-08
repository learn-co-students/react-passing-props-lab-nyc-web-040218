import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
    constructor() {
        super();

        this.state = {
            filters: [],
            selectedFilter: null,
            items: [],
            fruit: [],
            currentFilter: null
        }
    }

    componentWillMount() {
        this.fetchFilters();
    }

    componentDidMount() {
    fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({ items }));
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
            <FruitBasket handleChange={this.handleFilterChange} selectedFilter={this.state.selectedFilter} filters={this.state.filters} items={this.state.items} />
        )
    }
}

export default App;
