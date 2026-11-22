import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

export default class CodigoCupom {
  readonly valor: string;
  static readonly REGEX = /^([A-Z]|\d)+$/;

  private constructor(valor: string) {
    const normalizado = valor.trim().toUpperCase();
    CodigoCupom.validar(normalizado);
    this.valor = normalizado;
  }

  static create(valor: string): CodigoCupom {
    return new CodigoCupom(valor);
  }

  static validar(valor: string): void {
    const erros = Validador.combinar(
      Validador.naoVazio(valor, Erros.CODIGO_CUPOM_INVALIDO),
      Validador.tamanhoMaiorQue(valor, 3, Erros.CODIGO_CUPOM_INVALIDO),
      Validador.tamanhoMenorQue(valor, 20, Erros.CODIGO_CUPOM_INVALIDO),
      Validador.regex(valor, CodigoCupom.REGEX, Erros.CODIGO_CUPOM_INVALIDO),
    );
    if (erros) throw new Error(erros.join(","));
  }
}
