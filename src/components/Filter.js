import React from 'react';

const Filter = ({filters, handleChange}) => {
  console.log(filters, " filters");
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>{

        <option key={filter} value={filter}> {filter} </option>
      })
    }
    </select>
  );

}
export default Filter;

Filter.defaultProps = {
  filters : [],
  handleChange: function() {}

};
