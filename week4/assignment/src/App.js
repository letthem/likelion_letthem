import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: rgb(167, 167, 215);
  font-size: 45px;

  @media screen and (max-width: 767px) {
    font-size: 35px;
  }
`;

const InputTodo = styled.input`
  width: 600px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid rgba(167, 167, 215, 0.3);
  border-radius: 10px;
  background-color: aliceblue;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    width: 300px;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

const SubmitBtn = styled.button`
  margin-left: 10px;
  border: none;
  padding: 12px 18px;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgba(167, 167, 215, 0.3);

  @media screen and (max-width: 767px) {
    font-size: 15px;
    padding: 12px 16px;
  }
`;

const TodoItem = styled.li`
  list-style: none;
  font-size: 20px;
  text-decoration: ${(props) =>
    props.isdone === "true" ? "line-through" : "none"};
  color: ${(props) => (props.isdone === "true" ? "gray" : "black")};
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
      nextId.current = storedTodos.length + 1;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }

    const newTodo = {
      id: nextId.current,
      value: todo,
      isdone: false,
    };

    setTodos((arr) => [newTodo, ...arr]);
    nextId.current++;
    setTodo("");
  };

  const checkTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
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
        <InputTodo
          type="text"
          value={todo}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <SubmitBtn onClick={onSubmit}>+</SubmitBtn>
      </form>
      <ul style={{ textAlign: "center" }}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            isdone={item.isdone.toString()}
            onClick={() => checkTodo(item.id)}
          >
            {item.value}
            <span onClick={() => onDelete(item.id)}> 🗑️</span>
          </TodoItem>
        ))}
      </ul>
    </AppContainer>
  );
}
export default App;
