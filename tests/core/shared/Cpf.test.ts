import { expectFailure } from "node:test";
import Erros from "../../../src/constants/Erros";
import CPF from "../../../src/core/shared/CPF";
describe("Cpf", () => {
  test("Deve lancar erro ao tentar criar um cpf com string vazia", () => {
    expect(() => CPF.create("")).toThrow(Erros.CPF_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um cpf com string incompleta", () => {
    expect(() => CPF.create("123")).toThrow(Erros.CPF_INVALIDO);
    expect(() => CPF.create("123456")).toThrow(Erros.CPF_INVALIDO);
    expect(() => CPF.create("123456789")).toThrow(Erros.CPF_INVALIDO);
    expect(() => CPF.create("123456789-0")).toThrow(Erros.CPF_INVALIDO);
  });
  test("Deve criar um cpf valido", () => {
    const cpf = CPF.create("218.022.018-90");
    expect(cpf).toBeInstanceOf(CPF);
  });

  test("Deve lancar erro ao tentar criar um cpf invalido", () => {
    expect(() => CPF.create("123456789-00")).toThrow(Erros.CPF_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um cpf invalido com somente espaços", () => {
    expect(() => CPF.create("      ")).toThrow(Erros.CPF_INVALIDO);
  });

  test("Deve retornar um cpf formatado", () => {
    const cpf = CPF.create("21802201890");
    expect(cpf.formatado).toBe("218.022.018-90");
    console.log(cpf.formatado);
  });

  test("Deve lançar erro ao tentar criar CPF sem informar valor", () => {
    expect(() => CPF.create(undefined as any)).toThrow(Erros.CPF_INVALIDO);
  });
});
