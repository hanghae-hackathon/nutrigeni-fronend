import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessTokenAtom = atom({
  key: "accessTokenAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
