import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

export default function TodoItem({ todo, editTodo, deleteTodo, completeTodo }) {
  const [editing, setEditing] = useState(false);

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      {editing ? (
        <TodoTextInput
          text={todo.text}
          editing={editing}
          onSave={(text) => {
            if (text.length === 0) {
              deleteTodo(todo.id);
            } else {
              editTodo(todo.id, text);
            }
            setEditing(false);
          }}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label
            onDoubleClick={() => {
              setEditing(true);
            }}
          >
            {todo.text}
          </label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};
