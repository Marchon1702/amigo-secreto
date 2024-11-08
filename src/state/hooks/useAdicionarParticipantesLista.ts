import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaDeParticipantesState } from "../atom";

export const useAdicionarParticipanteLista = () => {
  const setAdicionarParticipantesLista = useSetRecoilState<string[]>(
    listaDeParticipantesState
  );
  const lista = useRecoilValue(listaDeParticipantesState);
  const setErro = useSetRecoilState(erroState);

  return (novoParticipante: string) => {
    if (lista.includes(novoParticipante)) {
      setErro("Esse nome já existe na lista");

      setTimeout(() => {
        setErro("");
      }, 3000);
      return
    }
    setAdicionarParticipantesLista((listaAnterior) => [
      ...listaAnterior,
      novoParticipante,
    ]);
  };
};
