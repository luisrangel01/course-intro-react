import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../../providers/TodoContext";

// import { useLocalStorage } from "../../hooks/useLocalStorage";
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de intro a React", completed: true },
//   { text: "Llora con la llorona", completed: false },
//   { text: "Korn", completed: false },
//   { text: "Pearl Jam", completed: false },
// ];

// function useLocalStorage(itemName, initialValue) {
//   const localStorageItem = localStorage.getItem(itemName);

//   let parsedItem = initialValue;

//   if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(parsedItem));
//   } else {
//     parsedItem = JSON.parse(localStorageItem);
//   }

//   const [item, setItem] = React.useState(parsedItem);

//   const saveItem = (newTodos) => {
//     setItem(newTodos);
//     localStorage.setItem(itemName, JSON.stringify(newTodos));
//   };

//   return [item, saveItem];
// }

function App(props) {
  // const propsAppUI = {
  //   loading,
  //   error,
  //   searchedTodos,
  //   totalTodos,
  //   completedTodos,
  //   searchValue,
  //   setSearchValue,
  //   toggleCompleteTodo,
  //   deleteTodo,
  // };

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
