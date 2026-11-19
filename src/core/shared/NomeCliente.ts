import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
export default class NomeCliente {
  readonly valor: string;
  static readonly REGEX = /^[a-zA-ZÀ-ÿ '-\s]+$/;

  private constructor(valor: string | null | undefined) {
    if (typeof valor !== "string") {
      throw new Error(Erros.NOME_INVALIDO);
    }

    const nomeFormatado = NomeCliente.capitalizarTexto(valor);

    const erros = Validador.combinar(
      Validador.naoNulo(nomeFormatado, Erros.NOME_INVALIDO),
      Validador.naoVazio(nomeFormatado, Erros.NOME_INVALIDO),
      Validador.tamanhoMenorQue(nomeFormatado, 60, Erros.NOME_MUITO_GRANDE),
      Validador.tamanhoMaiorQue(nomeFormatado, 3, Erros.NOME_MUITO_PEQUENO),
      Validador.regex(nomeFormatado, NomeCliente.REGEX, Erros.NOME_INVALIDO),
    );

    if (erros) throw new Error(erros.join(","));

    this.valor = nomeFormatado;
  }

  static create(valor: string | null | undefined): NomeCliente {
    return new NomeCliente(valor);
  }

  private static capitalizarTexto(valor: string): string {
    const valorNormalizado = valor.trim().replace(/\s+/g, " ");
    if (valorNormalizado !== "") {
      const valorCapitalizado = valorNormalizado.split(" ");
      const palavrasCapitalizada = valorCapitalizado.map((palavra) => {
        const palavra1 =
          palavra[0]?.toUpperCase()! + palavra.slice(1).toLowerCase();
        const posicaoApostrofo = palavra1.indexOf("'");
        const posicaoInfen = palavra1.indexOf("-");

        if (posicaoInfen !== -1 || posicaoApostrofo !== -1) {
          const posicaoLetra = posicaoInfen + 1 || posicaoApostrofo + 1;

          const nomeCompleto =
            palavra1.slice(0, posicaoLetra) +
            palavra1[posicaoLetra]?.toUpperCase() +
            palavra1.slice(posicaoLetra + 1);

          return nomeCompleto;
        }
        return palavra1;
      });
      return palavrasCapitalizada.join(" ");
    }
    return "";
  }
}
