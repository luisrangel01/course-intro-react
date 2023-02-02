import React from "react";

import { TodoContext } from "../../providers/TodoContext";
import "./style.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
