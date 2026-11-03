import Erros from "../../constants/Erros";

export default class NumeroParcela {
  readonly valor: number;

  private constructor(valor: number) {
    if (!NumeroParcela.isValido(valor)) throw new Error(Erros.NUMEROPARCELA_INVALIDO);
    this.valor = valor;
  }

  static create(valor: number): NumeroParcela {
    return new NumeroParcela(valor);
  }

  static isValido(valor: number): boolean {
    return typeof valor === "number" && Number.isInteger(valor) && valor > 0 && valor < 13;
  }
}
