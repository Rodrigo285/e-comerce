export default class Quantidade {
  readonly valor: number;

  private constructor(valor: number) {
    if (!Quantidade.isValido(valor)) throw new Error("quantidade invalida");
    this.valor = valor;
  }

  static create(valor: number): Quantidade {
    return new Quantidade(valor);
  }

  static isValido(valor: number): boolean {
    return Number.isFinite(valor) && valor >= 0;
  }

  somar(outra: Quantidade): Quantidade {
    return Quantidade.create(this.valor + outra.valor);
  }
}
