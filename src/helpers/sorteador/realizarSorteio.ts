import shuffle from "just-shuffle";

export default function realizarSorteio(participantes: string[]) {
    const todosParticipantes = participantes.length;
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>()

    for (let index = 0; index < todosParticipantes; index++) {
        const indexDoAmigo = index === (todosParticipantes - 1) ? 0 : index + 1
        resultado.set(embaralhado[index], embaralhado[indexDoAmigo])
    }

    return resultado
}