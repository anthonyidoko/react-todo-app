import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

const TodoList = ({ todoList, removeTodo, handleClick }) => {
  return (
    <div className={styles.content}>
      <h4>
        {todoList.map((todo, key) => (
          <div key={key}>
            <TodoItem
              todo={todo}
              handleDelete={() => removeTodo(todo)}
              handleClick={() => handleClick(todo)}
            />
            <p></p>
          </div>
        ))}
      </h4>
    </div>
  );
};

export default TodoList;
