import Erros from "../../../src/constants/Erros";
import CEP from "../../../src/core/shared/CEP";

describe("CEP", () => {
  test("Deve retornar um cep valido", () => {
    const cep = CEP.create("14786-050");
    expect(cep).toBeInstanceOf(CEP);
  });

  test("Deve retornar um cep valido", () => {
    const cep = CEP.create("14786050");
    expect(cep).toBeInstanceOf(CEP);
  });

  test("Deve retornar um cep valido", () => {
    const cep = CEP.create("01234-567");
    expect(cep).toBeInstanceOf(CEP);
  });

  test("Deve lancar um erro ao tentar criar cep com caracteres invalidos", () => {
    expect(() => CEP.create("14780-00")).toThrow(Erros.CEP_INVALIDO);
  });

  test("Deve lancar um erro ao tentar criar cep com caracteres invalidos", () => {
    expect(() => CEP.create("1478000")).toThrow(Erros.CEP_INVALIDO);
  });

  test("Deve lancar um erro ao tentar criar cep com caracteres invalidos", () => {
    expect(() => CEP.create("14780-000A")).toThrow(Erros.CEP_INVALIDO);
  });

  test("Deve retornar o cep informado formatado", () => {
    const cep = CEP.create("14784-040");
    expect(cep.formatado).toBe("14784-040");
  });
});
