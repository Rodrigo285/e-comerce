import Erros from "../../constants/Erros";

export default class PeriodoValidade {
  readonly valorInicial: Date;
  readonly valorFinal: Date;

  private constructor(valorInicial: Date, valorFinal: Date) {
    if (
      valorInicial.getTime() >= valorFinal.getTime() ||
      Number.isNaN(valorInicial.getTime()) ||
      Number.isNaN(valorFinal.getTime())
    )
      throw new Error(Erros.PERIODO_VALIDADE_INVALIDO);
    this.valorInicial = valorInicial;
    this.valorFinal = valorFinal;
  }

  static create(valorInicial: Date, valorFinal: Date): PeriodoValidade {
    return new PeriodoValidade(valorInicial, valorFinal);
  }
}
