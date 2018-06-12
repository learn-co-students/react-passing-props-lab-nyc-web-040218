import React from "react";

const Filter = ({ filters, setFruitType }) =>
  <select onChange={setFruitType} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>;

Filter.defaultProps = {
  filters: [],
  setFruitType: function () { }
};

export default Filter;
