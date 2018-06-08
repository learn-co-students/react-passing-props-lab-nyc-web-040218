import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: []
    };
  }

  componentWillMount() {
    this.fetchFilters(this.props);
  }

  fetchFilters = (props) => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => props.setFilters(filters));
  }

  render() {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.props.getFilters().map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }
}

export default Filter;
