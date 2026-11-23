import Erros from "../../constants/Erros";

export default class PeriodoValidade {
  readonly valorInicial: Date;
  readonly valorFinal: Date;

  private constructor(valorInicial: Date, valorFinal: Date) {
    const dataInicial = new Date(valorInicial);
    const dataFinal = new Date(valorFinal);

    if (
      Number.isNaN(dataInicial.getTime()) ||
      Number.isNaN(dataFinal.getTime())
    ) {
      throw new Error(Erros.PERIODO_VALIDADE_INVALIDO);
    }

    if (dataInicial.getTime() >= dataFinal.getTime()) {
      throw new Error(Erros.PERIODO_VALIDADE_INVALIDO);
    }
    dataInicial.setUTCHours(0, 0, 0, 0);
    dataFinal.setUTCHours(23, 59, 59, 999);

    this.valorInicial = dataInicial;
    this.valorFinal = dataFinal;
  }

  static create(valorInicial: Date, valorFinal: Date): PeriodoValidade {
    return new PeriodoValidade(valorInicial, valorFinal);
  }

  dataEstaNoPeriodo(data: Date): boolean {
    if (Number.isNaN(data.getTime())) return false;
    return (
      data.getTime() >= this.valorInicial.getTime() &&
      data.getTime() <= this.valorFinal.getTime()
    );
  }
}
