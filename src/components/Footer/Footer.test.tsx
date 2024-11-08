import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "."
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useSorteioParticipantes } from "../../state/hooks/useSorteioParticipantes"

jest.mock("../../state/hooks/useListaParticipantes", () => {
    return {
      useListaParticipantes: jest.fn(),
    }
})

const mockNavegacao = jest.fn()
const mockSorteador = jest.fn()

jest.mock("../../state/hooks/useSorteioParticipantes", () => {
    return {
        useSorteioParticipantes: () => mockSorteador,
    }
})

jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavegacao,
    }
})

describe('Quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    })

    test('O brincadeira não pode começar', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['ana', 'catarina', 'josefina']);
    })

    test('O brincadeira pode começar', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteador).toHaveBeenCalledTimes(1)
    })
})

