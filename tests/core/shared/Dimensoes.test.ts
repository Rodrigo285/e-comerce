import Erros from "../../../src/constants/Erros";
import Dimensoes from "../../../src/core/shared/Dimensoes";

test("Deve criar dimensoes validas", () => {
  const dimensoes = Dimensoes.create(30, 20, 15);
  expect(dimensoes).toBeInstanceOf(Dimensoes);
});

test("Deve lancar erro ao tentar criar dimensoes igual a zero", () => {
  expect(() => Dimensoes.create(0, 0, 0)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve lancar erro ao criar altura  igual a zero", () => {
  expect(() => Dimensoes.create(0, 20, 10)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve lancar erro ao criar largurra negativa ou  igual a zero", () => {
  expect(() => Dimensoes.create(15, -20, 8)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve lancar erro ao criar profundidade igual a NaN", () => {
  expect(() => Dimensoes.create(21.4, 10.6, NaN)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve lancar erro ao criar altura  igual Infinity", () => {
  expect(() => Dimensoes.create(Infinity, 12.5, 45.8)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve lancar erro para profundidade negativa", () => {
  expect(() => Dimensoes.create(20, 15, -10)).toThrow(Erros.DIMENSOES_INVALIDAS);
});

test("Deve aceitar dimensoes com valores decimais", () => {
  const dimensoes = Dimensoes.create(12.5, 10.6, 45.8);

  expect(dimensoes).toBeInstanceOf(Dimensoes);
});

test("Deve retornar true se  as dimensoes forem  iguais", () => {
  const dimensoesProduto1 = Dimensoes.create(20, 15.8, 30.7);
  const dimensoesProduto2 = Dimensoes.create(20, 15.8, 30.7);
  expect(dimensoesProduto1.igual(dimensoesProduto2)).toBe(true);
});

test("Deve retornar false se  as dimensoes forem diferentes", () => {
  const dimensoesProduto1 = Dimensoes.create(25, 15.8, 30.7);
  const dimensoesProduto2 = Dimensoes.create(20, 15.8, 30.7);
  expect(dimensoesProduto1.igual(dimensoesProduto2)).toBe(false);
});
