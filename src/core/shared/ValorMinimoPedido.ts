import Erros from "../../constants/Erros";
export default class ValorMinimoPedido {
  readonly valor: number;

  private constructor(valor: number) {
    if (valor <= 0 || Number.isNaN(valor)) throw new Error(Erros.VALOR_MINIMO_PEDIDO_INVALIDO);
    this.valor = valor;
  }

  static create(valor: number): ValorMinimoPedido {
    return new ValorMinimoPedido(valor);
  }
}
