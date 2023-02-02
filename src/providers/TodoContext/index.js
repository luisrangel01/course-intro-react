import React from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((element) => !!element.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchValue.toLowerCase());
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };

  const toggleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchedTodos,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
