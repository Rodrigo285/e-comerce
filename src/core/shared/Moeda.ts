import Validador from "../../utils/Validador";
import Erros from "../../constants/Erros";
import MoedasPermitidas from "../../constants/MoedasPermitidas";

export default class Moeda {
  readonly valor: string;
  static readonly REGEX = /^[A-Z]{3}$/;

  private constructor(valor: string) {
    const valorNormalizado = valor.toUpperCase();
    const moedasPermitidas = Object.values(MoedasPermitidas).some(
      (moeda) => moeda === valorNormalizado,
    );

    if (!Moeda.isValida(valorNormalizado) || !moedasPermitidas)
      throw new Error(Erros.MOEDA_INVALIDA);
    this.valor = valorNormalizado;
  }

  static create(valor: string): Moeda {
    return new Moeda(valor);
  }

  static isValida(valor: string): boolean {
    const erro = Validador.regex(valor, this.REGEX, Erros.MOEDA_INVALIDA);
    return erro === null;
  }

  igual(outro: Moeda): boolean {
    return this.valor === outro.valor;
  }
}
