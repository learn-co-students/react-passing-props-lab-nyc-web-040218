import React from 'react';
import Filter from './Filter'
import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList'

class App extends React.Component{
  constructor(){
    super();

    this.state={
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

    componentDidMount() {
      this.fetchFilters();
      this.fetchFruit();
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

    updateFilter = (event) => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

    render(){
      return(
          <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} onUpdateFilter={this.updateFilter}/>
      )
    }
  }

export default App;
