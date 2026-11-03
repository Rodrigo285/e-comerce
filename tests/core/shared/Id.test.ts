import Erros from "../../../src/constants/Erros";
import Id from "../../../src/core/shared/Id";

test("Deve criar um Id valido", () => {
  const id = Id.create();
  expect(id).toBeInstanceOf(Id);
});

test("Deve gerar IDs diferentes", () => {
  const id1 = Id.create();
  const id2 = Id.create();

  expect(id1.valor).not.toBe(id2.valor);
});

test("Deve retornar true para IDs iguais", () => {
  const id1 = Id.create();

  expect(id1.igual(id1)).toBe(true);
});

test("Deve retornar false para IDs diferentes", () => {
  const id1 = Id.create();
  const id2 = Id.create();

  expect(id1.igual(id2)).toBe(false);
});

test("Deve retornar true para IDs diferentes", () => {
  const id1 = Id.create();
  const id2 = Id.create();

  expect(id1.diferente(id2)).toBe(true);
});

test("Deve criar um id apartir de um ID existente", () => {
  const id1 = Id.create();
  const id2 = Id.from(id1.valor);

  expect(id2).toBeInstanceOf(Id);
});

test("Deve verificar se valor do id2 e igual", () => {
  const id1 = Id.create();
  const id2 = Id.from(id1.valor);

  expect(id2.valor).toBe(id1.valor);
});

test("Deve verificar se valor do id2 e false", () => {
  const id1 = Id.create();
  const id2 = Id.from(id1.valor);

  expect(id2.novo).toBe(false);
});

test("Deve lançar erro para um ID inválido", () => {
  expect(() => Id.from("12345")).toThrow();
});
