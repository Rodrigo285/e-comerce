import Moeda from "../../../src/core/shared/Moeda";
import Erros from "../../../src/constants/Erros";

test("Deve criar uma moeda valida", () => {
  const moeda = Moeda.create("BRL");
  expect(moeda).toBeInstanceOf(Moeda);
  expect(moeda.valor).toBe("BRL");
});

test("Deve converter o codigo da moeda para maiusculo", () => {
  const moeda = Moeda.create("brl");
  expect(moeda.valor).toBe("BRL");
});

test("Deve lancar erro para moeda nao permitida", () => {
  expect(() => Moeda.create("UUSSR")).toThrow(Erros.MOEDA_INVALIDA);
});

test("Deve lancar erro para uma codigo incompleto", () => {
  expect(() => Moeda.create("BR")).toThrow(Erros.MOEDA_INVALIDA);
});

test("Deve retornar true para moedas iguais", () => {
  const moeda1 = Moeda.create("BRL");
  const moeda2 = Moeda.create("BRL");
  expect(moeda1.igual(moeda2)).toBe(true);
});

test("Deve retornar false para moedas diferentes", () => {
  const moeda1 = Moeda.create("BRL");
  const moeda2 = Moeda.create("EUR");
  expect(moeda1.igual(moeda2)).toBe(false);
});

test("Deve lançar erro para moeda vazia", () => {
  expect(() => Moeda.create("")).toThrow(Erros.MOEDA_INVALIDA);
});
