import Erros from "../../constants/Erros";

export default class Desconto {
  readonly valor: number;
  private constructor(valor: number) {
    if (Number.isNaN(valor)) throw new Error(Erros.DESCONTO_INVALIDO);
    if (valor < 0 || valor > 100) throw new Error(Erros.DESCONTO_INVALIDO);

    this.valor = valor;
  }

  static create(valor: number): Desconto {
    return new Desconto(valor);
  }
}
