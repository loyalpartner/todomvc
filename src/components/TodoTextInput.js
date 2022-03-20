import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function TodoTextInput({
  onSave,
  text: originalText,
  placeholder,
  editing,
  newTodo,
}) {
  const [text, setText] = useState(originalText);
  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      onBlur={({ target }) => !newTodo && onSave(target.value)}
      onChange={({ target }) => setText(target.value)}
      onKeyDown={({ key, target }) => {
        const value = target.value.trim();
        if (key === "Enter") {
          onSave(value);
          newTodo && setText("");
        }
      }}
    />
  );
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
};
