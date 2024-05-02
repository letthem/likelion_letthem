// 할 일 추가하기, 추가했던 할 일 삭제하기, 완료한 할 일 줄 긋기
const inputTodo = document.getElementById("inputTodo"); // 할 일 입력창
const todoList = document.getElementById("todoList"); // 할 일 리스트 창
const addBtn = document.getElementById("addBtn"); // 추가 버튼

const addTodo = () => {
  // 입력된 todo text
  const todoText = inputTodo.value.trim();
  inputTodo.value = ""; // input 비우기

  // 입력한 내용이 없으면 alert
  if (todoText === "") {
    alert("할 일을 입력하세요.");
    return;
  }

  // todo 추가
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  // todo 내용 span으로 표시
  const todoContent = document.createElement("span");
  todoContent.textContent = todoText;

  // 할 일 리스트에 추가
  todoList.appendChild(todoItem);

  // deleteBtn 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  // 할 일 아이템에 내용과 삭제 버튼 추가
  todoItem.appendChild(todoContent);
  todoItem.appendChild(deleteBtn);

  // deleteBtn 클릭 -> todo 삭제
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });

  // todoContent 클릭 시 완료 토글
  todoContent.addEventListener("click", () => {
    todoContent.classList.toggle("completed");
  });
};

// 추가 버튼 클릭 시 할 일 추가 함수 실행
addBtn.addEventListener("click", addTodo);
