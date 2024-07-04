import React from "react";
import { RecoilRoot } from "recoil";
import { Todo } from "./todo";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  );
}
export default App;
