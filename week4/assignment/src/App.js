import { useRef, useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: rgb(167, 167, 215);
  font-size: 36px;
`;

const TodoItem = styled.li`
  list-style: none;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  color: ${(props) => (props.isDone ? "gray" : "black")};
  cursor: pointer;
`;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }

    const newTodo = {
      id: nextId.current++,
      value: todo,
      isDone: false,
    };

    setTodos((arr) => [newTodo, ...arr]);
    setTodo("");
  };

  const checkTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <AppContainer>
      <Title>TO DO LIST</Title>
      <form>
        <input
          type="text"
          value={todo}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <button onClick={onSubmit}>+</button>
      </form>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            isDone={item.isDone}
            onClick={() => checkTodo(item.id)}
          >
            {item.value}
            <span onClick={() => onDelete(item.id)}>🗑️</span>
          </TodoItem>
        ))}
      </ul>
    </AppContainer>
  );
}
export default App;
