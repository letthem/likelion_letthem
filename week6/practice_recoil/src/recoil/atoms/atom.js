import { atom } from "recoil";

// atom 정의. state가 생성됨
export const todoState = atom({
  key: "todo",
  default: [],
});
