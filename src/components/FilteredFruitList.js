import React, { Component } from 'react';


const FilteredFruitList= (props) => {
  const list = !props.filter || props.filter === 'all' ? props.itemList : props.itemList.filter(i => i.fruit_type === props.filter)
  console.log("list", list)
    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    )
    console.log("list", list)
}

export default FilteredFruitList;
