import Erros from "../../../src/constants/Erros";
import Telefone from "../../../src/core/shared/Telefone";

describe("Telefone", () => {
  test("Deve criar um telefone valido", () => {
    const tel = Telefone.create("17 3323-1234");
    expect(tel).toBeInstanceOf(Telefone);
  });

  test("Deve criar um telefone valido", () => {
    const tel = Telefone.create("17 98107-1234");
    expect(tel).toBeInstanceOf(Telefone);
  });

  test("Deve lancar erro para um telefone que esta faltando digito", () => {
    expect(() => Telefone.create("322-4567")).toThrow(Erros.TELEFONE_INVALIDO);
  });

  test("Deve lancar erro para um telefone celular que começa com digito invalido", () => {
    expect(() => Telefone.create("17 7156-3456")).toThrow(Erros.TELEFONE_INVALIDO);
  });

  test("Deve lancar erro para um telefone celular que começa com digito invalido", () => {
    expect(() => Telefone.create(undefined as any)).toThrow(Erros.TELEFONE_INVALIDO);
  });

  test("Deve verificar se o ddd nao existe na lista", () => {
    expect(() => Telefone.create("20 3324-3256")).toThrow(Erros.TELEFONE_INVALIDO);
  });

  test("Deve retornar o ddd do telefone informado", () => {
    const tel = Telefone.create("17 3323-1234");
    expect(tel.DDD).toBe("17");
  });

  test("Deve retornar o numero do telefone informado", () => {
    const tel = Telefone.create("17 3323-1234");
    expect(tel.numeroFormatado).toBe("17 3323-1234");
  });

  test("Deve retornar o celular informado", () => {
    const cel = Telefone.create("17 98107-1234");
    expect(cel.numeroFormatado).toBe("17 98107-1234");
  });
});
