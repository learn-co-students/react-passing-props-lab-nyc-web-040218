import React, { Component } from 'react';

class FilteredFruitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.fetchFilters(this.props)
  }

  fetchFilters = (props) => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => props.setItems(items));
  }

  render() {
    const list = !this.props.getSelectedFilter() || this.props.getSelectedFilter() === 'all' ? this.state.items : this.props.getItems().setSelectedFilter(i => i.fruit_type === this.props.getSelectedFilter());

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }
}

export default FilteredFruitList;
