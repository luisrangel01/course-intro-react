import "./style.css";

function TodoItem(props) {
  const onComplete = () => {
    alert(`ya completaste el todo ${props.todo.text}`);
  };

  const onDelete = () => {
    alert(`borraste el todo ${props.todo.text}`);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.todo.completed && "Icon-check--active"
        }`}
        onClick={onComplete}
      >
        √
      </span>
      <p
        className={`TodoItem-p ${
          props.todo.completed && "TodoItem-p--complete"
        }`}
      >
        {props.todo.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
