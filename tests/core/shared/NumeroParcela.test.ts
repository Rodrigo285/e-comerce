import Erros from "../../../src/constants/Erros";
import NumeroParcela from "../../../src/core/shared/NumeroParcelas";

test("Deve criar um numero de parcelas valido", () => {
  const numero = NumeroParcela.create(10);
  expect(numero).toBeInstanceOf(NumeroParcela);
});

test("Deve lancar erro ao tentar criar numero parcela negativo", () => {
  expect(() => NumeroParcela.create(-4)).toThrow(Erros.NUMEROPARCELA_INVALIDO);
});

test("Deve lancar erro ao tentar criar numero com outro tipo", () => {
  expect(() => NumeroParcela.create("4" as any)).toThrow(Erros.NUMEROPARCELA_INVALIDO);
});

test("Deve lancar erro ao tentar criar numero com zero", () => {
  expect(() => NumeroParcela.create(0)).toThrow(Erros.NUMEROPARCELA_INVALIDO);
});

test("Deve lancar erro ao tentar criar numero decimal", () => {
  expect(() => NumeroParcela.create(6.5)).toThrow(Erros.NUMEROPARCELA_INVALIDO);
});

test("Deve retornar true para parcela unica", () => {
  const numero = NumeroParcela.create(1);
  expect(numero.valor).toBe(1);
});

test("Deve lancar erro para mais de 12 parcelas", () => {
  expect(() => NumeroParcela.create(13)).toThrow(Erros.NUMEROPARCELA_INVALIDO);
});
