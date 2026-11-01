import Erros from "../../../src/constants/Erros";
import Peso from "../../../src/core/shared/Peso";

test("Deve criar um peso armazenado em gramas", () => {
  const peso = Peso.create(1100);
  expect(peso).toBeInstanceOf(Peso);
});

test("Deve lancar erro ao tentar criar um peso invalido", () => {
  expect(() => Peso.create(0)).toThrow(Erros.PESO_INVALIDO);
});

test("Deve lancar erro ao tentar criar um peso decimal", () => {
  expect(() => Peso.create(1.34)).toThrow(Erros.PESO_INVALIDO);
});

test("Deve lancar erro ao tentar criar um peso com NaN", () => {
  expect(() => Peso.create(NaN)).toThrow(Erros.PESO_INVALIDO);
});

test("Deve lancar erro ao tentar criar um peso com valor Infinity", () => {
  expect(() => Peso.create(Infinity)).toThrow(Erros.PESO_INVALIDO);
});

test("Deve lancar erro para peso negativo", () => {
  expect(() => Peso.create(-100)).toThrow(Erros.PESO_INVALIDO);
});

test("Deve retornar true para pesos iguais", () => {
  const peso1 = Peso.create(1000);
  const peso2 = Peso.create(1000);
  expect(peso1.igual(peso2)).toBe(true);
});

test("Deve retornar false para pesos diferente", () => {
  const peso1 = Peso.create(900);
  const peso2 = Peso.create(1000);
  expect(peso1.igual(peso2)).toBe(false);
});
