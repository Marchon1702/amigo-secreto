import { useRecoilValue } from "recoil"
import { resultadoState } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoState);
}