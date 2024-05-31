// recoilState.js
import { atom } from "recoil";

export const accessTokenAtom = atom({
  key: "accessTokenAtom",
  default: "",
});

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {},
});
