export default class CPF {
  readonly valor: string;

  private constructor(valor?: string) {
    this.valor = valor?.replace(/\D/g, "") ?? "";
  }

  static create(valor: string): CPF {
    return new CPF(valor);
  }
}
