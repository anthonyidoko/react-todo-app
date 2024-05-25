import styles from "./todoitem.module.css";
const TodoItem = ({todo, handleDelete, handleClick}) => {
  const itemStyle = todo.isComplete
    ? [styles.li, styles.completed]
    : styles.li;
  return (
    <div className={styles.container}>
      <li onClick={handleClick} className={itemStyle}>
        {todo.name}
      </li>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
