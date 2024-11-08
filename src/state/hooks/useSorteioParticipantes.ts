import { useListaParticipantes } from "./useListaParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoState } from "../atom";
import realizarSorteio from "../../helpers/sorteador/realizarSorteio";

export const useSorteioParticipantes = () => {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoState);

  return () => {
    const resultado = realizarSorteio(participantes)
    setResultado(resultado);
  };
};
