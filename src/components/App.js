import React, {Component} from 'react'
import FruitBasket from './FruitBasket';
//import PropTypes from 'prop-types'

class App extends Component{
   constructor(){
    super();

    this.state={
      currentFilter: null,
      filters: [],
      fruit: []

    }
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
  fetchFruit = ()=> {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => {
        this.setState({ fruit })
    });
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }
  render() {
    return (
      <div>
        <FruitBasket
          fruit={this.state.fruit}
          filters = {this.state.filters}
          currentFilter = {this.state.currentFilter}
          handleOnChange={this.handleFilterChange }

          />
      </div>
    );
  }
}

export default App;
