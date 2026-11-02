import Erros from "../../../src/constants/Erros";
import Preco from "../../../src/core/shared/Preco";

test("Deve criar um preco com valor positivo", () => {
  const preco1 = Preco.create(25.0);
  expect(preco1).toBeInstanceOf(Preco);
});

test("Deve criar um preco com valor zero", () => {
  const preco1 = Preco.create(0);
  expect(preco1).toBeInstanceOf(Preco);
});

test("Deve lancar erro ao tentar criar preco negativo", () => {
  expect(() => Preco.create(-12.45)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao tentar criar preco com valor NaN", () => {
  expect(() => Preco.create(NaN)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao tentar criar preco com valor Infinity", () => {
  expect(() => Preco.create(Infinity)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve retornar true para precos iguais", () => {
  const preco1 = Preco.create(25.0);
  const preco2 = Preco.create(25.0);
  expect(preco1.igual(preco2)).toBe(true);
});

test("Deve retornar false para precos diferentes", () => {
  const preco1 = Preco.create(25.0);
  const preco2 = Preco.create(35.0);
  expect(preco1.igual(preco2)).toBe(false);
});

test("Deve retornar a soma dos precos ", () => {
  const preco1 = Preco.create(25.0);
  const preco2 = Preco.create(35.0);
  expect(preco1.soma(preco2).valor).toBe(60);
});

test("Nao deve alterar os objetos originais ao somar", () => {
  const preco1 = Preco.create(25);
  const preco2 = Preco.create(35);

  const total = preco1.soma(preco2);

  expect(preco1.valor).toBe(25);
  expect(preco2.valor).toBe(35);
  expect(total.valor).toBe(60);
});

test("Deve retorna o resultado da subtracao de precos", () => {
  const preco1 = Preco.create(45);
  const preco2 = Preco.create(35);
  expect(preco1.subtrair(preco2).valor).toBe(10);
});

test("Deve retorna o resultado da multiplicacao de precos", () => {
  const preco1 = Preco.create(45);
  expect(preco1.multiplicar(2).valor).toBe(90);
});

test("Deve lancar erro ao multiplicar por zero ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.multiplicar(0)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao multiplicar por valor negativo ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.multiplicar(-4)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao multiplicar por NaN ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.multiplicar(NaN)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao multiplicar por Infinity ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.multiplicar(Infinity)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar um erro ao tentar subtrair um preço menor  de um preco maior", () => {
  const preco1 = Preco.create(15);
  const preco2 = Preco.create(35);

  expect(() => preco1.subtrair(preco2)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao aplicar percentual negativo", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.calcularPercentual(-10)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao aplicar percentual NaN ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.calcularPercentual(NaN)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao aplicar percentual Infinity ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.calcularPercentual(Infinity)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve lancar erro ao aplicar percentual zero ", () => {
  const preco1 = Preco.create(45);
  expect(() => preco1.calcularPercentual(0)).toThrow(Erros.PRECO_INVALIDO);
});

test("Deve retorna o resultado da aplicaçao do percentual de precos", () => {
  const preco1 = Preco.create(45);

  expect(preco1.calcularPercentual(10).valor).toBe(4.5);
});
