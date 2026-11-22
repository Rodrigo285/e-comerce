import Erros from "../../../src/constants/Erros";
import ValorMinimoPedido from "../../../src/core/shared/ValorMinimoPedido";

describe("ValorMinimoPedido", () => {
  test("Deve criar um valor minimo de pedido valido", () => {
    const valorPedido = ValorMinimoPedido.create(60);
    expect(valorPedido).toBeInstanceOf(ValorMinimoPedido);
    expect(valorPedido.valor).toBe(60);
  });

  test("Deve criar um valor minimo de pedido valido no valor de 1", () => {
    const valorPedido = ValorMinimoPedido.create(1);
    expect(valorPedido).toBeInstanceOf(ValorMinimoPedido);
    expect(valorPedido.valor).toBe(1);
  });

  test("Deve criar um valor minimo de pedido valido com valor decimal ", () => {
    const valorPedido = ValorMinimoPedido.create(59.9);
    expect(valorPedido).toBeInstanceOf(ValorMinimoPedido);
    expect(valorPedido.valor).toBe(59.9);
  });

  test("Deve lancar erro ao tentar criar um valor de pedido com valor 0", () => {
    expect(() => ValorMinimoPedido.create(0)).toThrow(Erros.VALOR_MINIMO_PEDIDO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um valor de pedido com valor negativo -1", () => {
    expect(() => ValorMinimoPedido.create(-1)).toThrow(Erros.VALOR_MINIMO_PEDIDO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um valor de pedido com valor NaN", () => {
    expect(() => ValorMinimoPedido.create(NaN)).toThrow(Erros.VALOR_MINIMO_PEDIDO_INVALIDO);
  });
});
