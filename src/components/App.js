import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component{

  constructor(){
    super()

    this.state = {
      fruit:[],
      items: [],
      filters:[],
      currentFilter:null
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({
      fruit:[...this.state.fruit],
      filters:[...this.state.filters],
      currentFilter: event.target.value});
  }

  componentDidMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({
        fruit:[...this.state.fruit],
        filters:filters,
        currentFilter: this.state.currentFilter}));
  }

  render(){
    return(
      <FruitBasket updateFilterCallback={this.handleFilterChange}
      currentFilter={this.state.currentFilter}
      filters={this.state.filters}
      items={this.state.items}
    />
    )
  }
}
export default App;
