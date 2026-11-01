export default class Validador {
  static regex(valor: string, regex: RegExp, erro: string): null | string {
    return regex.test(valor) ? null : erro;
  }
}
