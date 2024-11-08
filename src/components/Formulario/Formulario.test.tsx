import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

describe("Comportamento do Formulario.tsx", () => {
  test("Quando o input estiver vazio, novos participantes não podem ser adicionados.", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o DOM do input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    // Encontrar Botão
    const botao = screen.getByRole("button");

    // Garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso tenha um valor no input", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o DOM do input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar Botão
    const botao = screen.getByRole("button");

    // Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // Clicar no botão de submeter
    fireEvent.click(botao);

    // Garantir que o input tenha um foco ativo
    expect(input).toHaveFocus();

    // Garantir que o input tenha um valor vazio após a submissão
    expect(input).toHaveValue("");
  });

  test("Caso o nome seja duplicado, uma mensagem de erro deve ser inserida.", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o DOM do input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar Botão
    const botao = screen.getByRole("button");

    // Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // Clicar no botão de submeter
    fireEvent.click(botao);
    // Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // Clicar no botão de submeter
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe("Esse nome já existe na lista");
  });

  test("A mensagem deve sumir após N segundos", async () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // Encontrar o DOM do input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar Botão
    const botao = screen.getByRole("button");

    // Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // Clicar no botão de submeter
    fireEvent.click(botao);
    // Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // Clicar no botão de submeter
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();

    // Espera N Segundos
    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
