import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
      selectedFilter: null,
      items: [],
    }
  }

  setSelectedFilter = (selectedFilter) => {
    this.setState({
      selectedFilter
    })
  }

  getSelectedFilter = () => {
    return this.state.selectedFilter
  }

  setFilters = (filters) => {
    this.setState({
      filters
    })
  }

  getFilters = () => {
    return this.state.filters
  }

  setItems = (items) => {
    this.setState({
      items
    })
  }

  getItems = () => {
    return this.state.items
  }

  render() {
    return (
      <FruitBasket
        setSelectedFilter={this.setSelectedFilter}
        getSelectedFilter={this.getSelectedFilter}
        setFilters={this.setFilters}
        getFilters={this.getFilters}
        setItems={this.setItems}
        getItems={this.getItems}
       />
    )
  }
}

export default App;
