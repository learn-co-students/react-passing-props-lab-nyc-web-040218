import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
    constructor() {
        super();

        this.state = {
            filters: [],
            selectedFilter: null,
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
        .then(fruit => this.setState({ fruit }));
    }
    
    fetchFilters = () => {
    fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    handleFilterChange = event => {
        this.setState({ selectedFilter: event.target.value });
    }

    render() {
        return (
            <FruitBasket onUpdateFilter={this.handleFilterChange} currentFilter={this.state.selectedFilter} filters={this.state.filters} fruit={this.state.fruit} />
        )
    }
}

export default App;
