import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import "./style.css";

function TodoItem(props) {
  const onClickComplete = () => {
    props.toggleCompleteTodo(props.todo.text);
  };

  const onClickDelete = () => {
    props.deleteTodo(props.todo.text);
  };

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.todo.completed}
        onComplete={onClickComplete}
      />
      {/* <span
        className={`Icon Icon-check ${
          props.todo.completed && "Icon-check--active"
        }`}
        onClick={onClickComplete}
      >
        √
      </span> */}
      <p
        className={`TodoItem-p ${
          props.todo.completed && "TodoItem-p--complete"
        }`}
      >
        {props.todo.text}
      </p>
      <DeleteIcon onDelete={onClickDelete} />
      {/* <span className="Icon Icon-delete" onClick={onClickDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
