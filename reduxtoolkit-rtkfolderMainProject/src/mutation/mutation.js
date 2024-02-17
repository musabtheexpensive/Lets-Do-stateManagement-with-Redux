import { produce } from "immer";

let demonsLayers = ["Tanzira", "hoyoky", "lengen", "openal", "Shinobu"];

const nextState = produce(demonsLayers, (draft) => {
  draft.push("zehensu");
});
console.log(nextState);
