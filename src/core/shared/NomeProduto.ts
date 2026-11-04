import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

export default class NomeProduto {
  readonly valor: string;

  private constructor(valor: string | null | undefined) {
    if (typeof valor !== "string") {
      throw new Error(Erros.NOME_INVALIDO);
    }
    const erros = Validador.combinar(
      Validador.naoNulo(valor, Erros.NOME_INVALIDO),
      Validador.naoVazio(valor, Erros.NOME_INVALIDO),
      Validador.tamanhoMaiorQue(valor, 3, Erros.TEXTO_MENOR_QUE_MINIMO),
      Validador.tamanhoMenorQue(valor, 50, Erros.TEXTO_MAIOR_QUE_MAXIMO),
    );

    if (erros) throw new Error(erros.join(","));

    const nome = valor.trim();
    const nomeFormatado = nome.replace(/\s+/g, " ");

    this.valor = nomeFormatado;
  }

  static create(valor: string | null | undefined): NomeProduto {
    return new NomeProduto(valor);
  }
}
