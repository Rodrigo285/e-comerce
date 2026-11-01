import Erros from "../../constants/Erros";

export default class Peso {
  readonly valor: number;

  private constructor(valor: number) {
    if (!Peso.isValido(valor)) throw new Error(Erros.PESO_INVALIDO);
    this.valor = valor;
  }

  static create(valor: number): Peso {
    return new Peso(valor);
  }

  static isValido(valor: number): boolean {
    if (typeof valor !== "number") return false;
    if (!Number.isFinite(valor)) return false;
    if (!Number.isInteger(valor)) return false;
    if (valor <= 0) return false;

    return true;
  }

  igual(outro: Peso): boolean {
    return outro instanceof Peso && this.valor === outro.valor;
  }
}
