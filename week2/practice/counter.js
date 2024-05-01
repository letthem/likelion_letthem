const num = document.getElementById("num");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

// 2가지 방법

increaseBtn.addEventListener("click", () => {
  let value = parseInt(num.innerText);
  num.innerText = value + 1;
});

decreaseBtn.onclick = () => {
  let value = parseInt(num.innerText);
  num.innerText = value - 1;
};

resetBtn.onclick = () => {
  let value = parseInt(num.innerText);
  num.innerText = 0;
};
