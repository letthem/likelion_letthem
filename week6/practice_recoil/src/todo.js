import { atom, useRecoilState } from "recoil";
import { todoState } from "./recoil/atoms/atom";

export const Todo = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  
  return <></>;
};
