import React from "react";

import { TodoContext } from "../../providers/TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI() {
  console.log("Render (antes del use effect)");
  React.useEffect(() => {
    console.log("use effect");
  }, []);

  console.log("Render (luego del use effect)");

  const { error, loading, searchedTodos, toggleCompleteTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error!</p>}
        {loading && <p>Estamos cargando los datos!</p>}
        {!loading && !searchedTodos.length && !error && (
          <p>Crea tu primer todo</p>
        )}

        {searchedTodos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              toggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </TodoList>

      {/* <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          toggleCompleteTodo,
          deleteTodo,
        }) => {
          return (
            <TodoList>
              {error && <p>Hubo un error!</p>}
              {loading && <p>Estamos cargando los datos!</p>}
              {!loading && !searchedTodos.length && !error && (
                <p>Crea tu primer todo</p>
              )}

              {searchedTodos.map((todo, index) => {
                return (
                  <TodoItem
                    key={index}
                    todo={todo}
                    toggleCompleteTodo={toggleCompleteTodo}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
            </TodoList>
          );
        }}
      </TodoContext.Consumer> */}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
