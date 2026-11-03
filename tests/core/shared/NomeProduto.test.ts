import NomeProduto from "../../../src/core/shared/NomeProduto";
import Erros from "../../../src/constants/Erros";
import Validador from "../../../src/utils/Validador";

test("Deve criar um nome de produto valido", () => {
  const nome = NomeProduto.create("camiseta azul");

  expect(nome).toBeInstanceOf(NomeProduto);
});

test("Deve lancar erro ao tentar criar um nome com valor null", () => {
  expect(() => NomeProduto.create(null)).toThrow(Erros.NOME_INVALIDO);
});

test("Deve lancar erro ao tentar criar um nome com valor undefined", () => {
  expect(() => NomeProduto.create(undefined)).toThrow(Erros.NOME_INVALIDO);
});

test("Deve lancar erro ao tentar criar um nome com valor vazio", () => {
  expect(() => NomeProduto.create("")).toThrow(Erros.NOME_INVALIDO);
});

test("Deve lancar erro ao tentar criar um nome com valor somente espaços", () => {
  expect(() => NomeProduto.create("     ")).toThrow(Erros.NOME_INVALIDO);
});

test("Deve lançar erro ao criar nome abaixo do mínimo", () => {
  expect(() => NomeProduto.create("TV")).toThrow(Erros.TEXTO_MENOR_QUE_MINIMO);
});

test("Deve criar nome exatamente no limite minimo ", () => {
  const nome = NomeProduto.create("ABC");
  expect(nome.valor).toBe("ABC");
});

test("Deve lançar erro ao criar nome acima do maximo", () => {
  expect(() => NomeProduto.create("a".repeat(101))).toThrow(
    Erros.TEXTO_MAIOR_QUE_MAXIMO,
  );
});

test("Deve remover espaços repetidos entre as palavras", () => {
  const nome = NomeProduto.create("Camiseta     Azul");

  expect(nome.valor).toBe("Camiseta Azul");
});

test("Deve remover espaços repetidos nas extremidades", () => {
  const nome = NomeProduto.create("  Camiseta Azul  ");

  expect(nome.valor).toBe("Camiseta Azul");
});
