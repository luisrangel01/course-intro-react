import React from "react";

import { TodoContext } from "../../providers/TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && !error && <EmptyTodos />}

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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
