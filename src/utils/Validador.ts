import { stringify } from "node:querystring";

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

  static tamanhoMaiorQue(
    valor: string,
    tamanhoMinimo: number,
    erro: string,
  ): null | string {
    return valor.length >= tamanhoMinimo ? null : erro;
  }

  static tamanhoMenorQue(
    valor: string,
    tamanhoMaximo: number,
    erro: string,
  ): null | string {
    return valor.length <= tamanhoMaximo ? null : erro;
  }

  static regex(valor: string, regex: RegExp, erro: string): null | string {
    return regex.test(valor) ? null : erro;
  }

  static combinar(...erros: (string | null)[]): string[] | null {
    const errosFiltrados = erros.filter((erro) => erro !== null) as string[];
    return errosFiltrados.length > 0 ? errosFiltrados : null;
  }
}
