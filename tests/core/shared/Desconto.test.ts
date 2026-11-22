import Desconto from "../../../src/core/shared/Desconto";
import Erros from "../../../src/constants/Erros";
describe("Desconto", () => {
  test("Deve criar um desconto valido", () => {
    const desconto = Desconto.create(10);
    expect(desconto).toBeInstanceOf(Desconto);
    expect(desconto.valor).toBe(10);
  });

  test("Deve ser possivel criar um desconto com 0 ", () => {
    const desconto = Desconto.create(0);
    expect(desconto).toBeInstanceOf(Desconto);
    expect(desconto.valor).toBe(0);
  });

  test("Deve ser possivel criar um desconto com 100 ", () => {
    const desconto = Desconto.create(100);
    expect(desconto).toBeInstanceOf(Desconto);
    expect(desconto.valor).toBe(100);
  });

  test("Deve criar um desconto valido com valores decimais", () => {
    const desconto = Desconto.create(12.5);
    expect(desconto).toBeInstanceOf(Desconto);
    expect(desconto.valor).toBe(12.5);
  });

  test("Deve lancar erro ao tentar criar desconstos com valores negativos", () => {
    expect(() => Desconto.create(-1)).toThrow(Erros.DESCONTO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar desconstos com valores acima de 100", () => {
    expect(() => Desconto.create(101)).toThrow(Erros.DESCONTO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar desconstos com valores NaN", () => {
    expect(() => Desconto.create(NaN)).toThrow(Erros.DESCONTO_INVALIDO);
  });
});
