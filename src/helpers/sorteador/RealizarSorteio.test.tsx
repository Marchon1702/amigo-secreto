import realizarSorteio from "./realizarSorteio"


describe('A função de realizar sorteio', () => {
    test('Deve garantir que os participantes não tirem eles mesmos', () => {
        const participantes = [
            'ana',
            'catarina',
            'joana',
            'cristina',
            'jander',
            'caramujo'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})