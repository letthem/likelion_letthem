import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 40px;
  color: skyblue;
`;

const Inputbox = styled.input`
  display: inline-block;
  width: 300px;
  height: 20px;
  font-size: 18px;
  padding: 5px;
  border: none;
  background-color: lavenderblush;
  border-radius: 5px;
  margin-right: 10px;
`;

const Checkbox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Button = styled.input`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: lavender;
`;

const Todo = styled.div`
  margin-bottom: 10px;
`;

const TodoText = styled.div`
  width: 200px;
`;

const TodoDone = styled.div`
  color: skyblue;
`;

const SERVER_URL = "http://localhost:4000/api/todo";
function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
    // fetch("http://localhost:4000/api/todo")
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
    // fetch("http://localhost:4000/api/todo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title>TODO LIST</Title>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}
      >
        <Inputbox name="text" />
        <Checkbox name="done" type="checkbox" />
        <Button type="submit" value="추가" />
      </form>
      {todoList &&
        todoList.map((todo) => (
          <Todo
            key={todo.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <TodoText>{todo.text}</TodoText>
            <TodoDone>{todo.done ? "O" : "X"}</TodoDone>
          </Todo>
        ))}
    </div>
  );
}
export default App;
