import "./style.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.todo.completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.todo.completed && "TodoItem-p--complete"}`}>
        {props.todo.text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };
