import Erros from "../../../src/constants/Erros";
import Quantidade from "../../../src/core/shared/Quantidade";

test("Deve retornar uma quantidade valida", () => {
  const quantidade = Quantidade.create(2);
  expect(quantidade).toBeInstanceOf(Quantidade);
});

test("Deve lancar erro para quantidade negativa", () => {
  expect(() => Quantidade.create(-1)).toThrow(Erros.QUANTIDADE_INVALIDA);
});

test("Deve somar duas quantidades", () => {
  const quant1 = Quantidade.create(2);
  const quant2 = Quantidade.create(3);
  expect(quant1.somar(quant2).valor).toBe(5);
});

test("Criar uma nova instancia na soma", () => {
  const quant1 = Quantidade.create(2);
  const quant2 = Quantidade.create(3);
  const resultado = quant1.somar(quant2);
  expect(resultado).not.toBe(quant1);
  expect(resultado).not.toBe(quant2);
  expect(resultado.valor).toBe(5);
});
