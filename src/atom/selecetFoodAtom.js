// atom/intervalRefAtom.js
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


export const selecetFoodAtom = atom({
  key: "selectFoodAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
