import CodigoCupom from "../../../src/core/shared/CodigoCupom";
import Erros from "../../../src/constants/Erros";

describe("CodigoCupom", () => {
  test("Deve criar um codigo de cupom valido", () => {
    const cupom = CodigoCupom.create("BEMVINDO10");
    expect(cupom).toBeInstanceOf(CodigoCupom);
    expect(cupom.valor).toBe("BEMVINDO10");
  });

  test("Deve criar um codigo de cupom valido", () => {
    const cupom = CodigoCupom.create("123456");
    expect(cupom).toBeInstanceOf(CodigoCupom);
    expect(cupom.valor).toBe("123456");
  });

  test("Deve criar um codigo de cupom valido e normalizado", () => {
    const cupom = CodigoCupom.create("  BEMVINDO10   ");
    expect(cupom.valor).toBe("BEMVINDO10");
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com texto pequeno", () => {
    expect(() => CodigoCupom.create("AB")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com texto grande ", () => {
    expect(() => CodigoCupom.create("A".repeat(21))).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com separaror @ ", () => {
    expect(() => CodigoCupom.create("CUPOM@10")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com separador -", () => {
    expect(() => CodigoCupom.create("CUPOM-10")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com separador com espaço vazio", () => {
    expect(() => CodigoCupom.create("CUPOM 10")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com separaror @ ", () => {
    expect(() => CodigoCupom.create("CUPOM@10")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com separador -", () => {
    expect(() => CodigoCupom.create("CUPOM-10")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com string vazia", () => {
    expect(() => CodigoCupom.create("")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um CodigoCupom com com somente espaços", () => {
    expect(() => CodigoCupom.create("        ")).toThrow(Erros.CODIGO_CUPOM_INVALIDO);
  });
});
