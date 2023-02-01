import React from "react";
import "./style.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      key="filter"
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p key="filterValue">{searchValue}</p>,
  ];
}

export { TodoSearch };
