import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
  key: "listaDeParticipantesState",
  default: [],
});

export const resultadoState = atom({
  key: 'resultadoState',
  default: new Map()
})

export const erroState = atom({
  key: "erroState",
  default: "",
});
