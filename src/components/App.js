import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  constructor(){


    super();

    this.state ={
      fruit: [],
      filters: [],
      selectedFilter: null,
      items: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({items}))
  }

  render(){
    return(
      <FruitBasket items={this.state.items} handleFilterChange={this.handleFilterChange} filter={this.state.filters} selected={this.state.selectedFilter} />
    )
  }
}

export default App;
