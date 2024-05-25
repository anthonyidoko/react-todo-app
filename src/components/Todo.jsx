import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const sortedTodos = todoList.slice().sort((a,b)=>Number(a.isComplete) - Number(b.isComplete))

  const handleDelete = (todo) => {
    let list = [...todoList];
    console.log(list);
    setTodoList(list.filter((item) => item !== todo));
    console.log(list);
  };

  const handleClick = (todo) => {
    let newOnes = todoList.map((element) => {
      return element.name === todo.name ? {...element,isComplete:!todo.isComplete} : {...element}
    });
    setTodoList(newOnes)
  };
  const completed = todoList.filter((todo)=> todo.isComplete).length
  const total = todoList.length

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList
        todoList={sortedTodos}
        removeTodo={handleDelete}
        handleClick={handleClick}
      />
      <Footer total={total} completed={completed}/>
    </div>
  );
};

export default Todo;
