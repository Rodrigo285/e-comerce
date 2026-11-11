import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
export default class NomeCliente {
  readonly valor: string;
  static readonly REGEX = /^[a-zA-ZÀ-ÿ '-\s]+$/;

  private constructor(valor: string | null | undefined) {
    if (typeof valor !== "string") {
      throw new Error(Erros.NOME_INVALIDO);
    }

    const erros = Validador.combinar(
      Validador.naoNulo(valor, Erros.NOME_INVALIDO),
      Validador.naoVazio(valor, Erros.NOME_INVALIDO),
      Validador.tamanhoMenorQue(valor, 60, Erros.NOME_MUITO_GRANDE),
      Validador.tamanhoMaiorQue(valor, 3, Erros.NOME_MUITO_PEQUENO),
      Validador.regex(valor, NomeCliente.REGEX, Erros.NOME_INVALIDO),
    );

    if (erros) throw new Error(erros.join(","));

    const nome = valor.trim();
    const nomeFormatado = nome.replace(/\s+/g, " ");

    this.valor = nomeFormatado;
  }

  static create(valor: string | null | undefined): NomeCliente {
    return new NomeCliente(valor);
  }
}
