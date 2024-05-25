import { useState } from "react";
import styles from "./form.module.css";
const Form = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState({ name: "", isComplete: false });
  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.name === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ name: "", isComplete: false});
  };
  return (
    <form className={styles.main} onSubmit={(e) => handleAdd(e)}>
        <input
          className={styles.inputField}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, isComplete: false })}
          placeholder="Enter a To-do item"
        />
        <button className={styles.button} type="submit">
          Add Item
        </button>
    </form>
  );
};

export default Form;
