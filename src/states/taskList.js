import { atom } from "recoil";

export const taskListArray = atom({
  key: "taskListArray",
  default: JSON.parse(window.localStorage.getItem("tasks"))
});
