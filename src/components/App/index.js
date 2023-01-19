// import './style.css';

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

import React from "react";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: true },
  { text: "Llora con la llorona", completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => {
          return <TodoItem key={index} todo={todo} />;
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
