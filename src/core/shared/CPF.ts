import Erros from "../../constants/Erros";

export default class CPF {
  readonly valor: string;

  private constructor(valor?: string) {
    this.valor = valor?.replace(/\D/g, "") ?? "";
    if (!CPF.isValido(this.valor)) throw new Error(Erros.CPF_INVALIDO);
  }

  static create(valor: string): CPF {
    return new CPF(valor);
  }

  get formatado() {
    return this.valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  //get digitoVerificador() {}

  static isValido(valor: string): boolean {
    if (!valor) return false;
    const numeros = valor.replace(/\D/g, "").split("");
    if (numeros.length !== 11) return false;

    const dv1 = this.validarDV(numeros.slice(0, 9), numeros[9]!);
    const dv2 = this.validarDV(numeros.slice(1, 10), numeros[10]!);

    return dv1 && dv2;
  }

  private static validarDV(
    digitos: string[],
    digitoInformado: string,
  ): boolean {
    const fatores = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const total = digitos.reduce((total, digito, i) => {
      return total + +digito * fatores[i]!;
    }, 0);
    const resto = total % 11;
    const dvCalculado = resto < 2 ? 0 : 11 - resto;
    return dvCalculado === +digitoInformado;
  }
}
