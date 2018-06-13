import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Filter = (props) => {

    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}

export default Filter;

Filter.defaultProps = {
  filters: PropTypes.array,
  handleChange: PropTypes.func
}
