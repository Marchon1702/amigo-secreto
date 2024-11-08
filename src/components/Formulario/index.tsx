import { useRef, useState } from "react";
import { useAdicionarParticipanteLista } from "../../state/hooks/useAdicionarParticipantesLista";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";

import './estilos.css'

export default function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipanteLista();
  const mensagemErro = useMensagemDeErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome)
    inputRef.current?.focus();
    setNome("")
  };

  return (
    <form onSubmit={adicionarParticipante} className="grupo-input-btn">
      <input
        ref={inputRef}
        value={nome}
        type="text"
        placeholder="Insira os nomes dos participantes"
        onChange={(event) => setNome(event.target.value)}
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemErro && <p className="alerta erro" role="alert">{mensagemErro}</p>}
    </form>
  );
}
