import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useSorteioParticipantes } from "../../state/hooks/useSorteioParticipantes";

import './estilos.css'

const Footer = () => {
  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();
  const realizarSorteio = useSorteioParticipantes();

  const iniciar = () => {
    navegarPara('/sorteio')
    realizarSorteio()
  }

  return (
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</button>
    </footer>
  );
};

export default Footer;
