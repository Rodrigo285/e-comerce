export default class Validador {
  static naoNulo(valor: any, erro: string): null | string {
    return valor !== null && valor !== undefined ? null : erro;
  }

  static naoVazio(
    valor: string | null | undefined,
    erro: string,
  ): null | string {
    if (Validador.naoNulo(valor, erro)) return erro;
    return valor?.trim() !== "" ? null : erro;
  }

  static tamanhoMinimo(
    valor: string,
    limite: number,
    erro: string,
  ): null | string {
    return valor.length >= limite ? null : erro;
  }

  static tamanhoMaximo(
    valor: string,
    limite: number,
    erro: string,
  ): null | string {
    return valor.length <= limite ? null : erro;
  }

  static regex(valor: string, regex: RegExp, erro: string): null | string {
    return regex.test(valor) ? null : erro;
  }
}
