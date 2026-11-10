import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
export default class NomeCliente {
  static readonly minimo: number = 3;
  static readonly maximo: number = 60;

  readonly valor: string;

  private constructor(valor: string) {
    if (typeof valor !== "string") {
      throw new Error(Erros.NOME_INVALIDO);
    }

    const erros = Validador.combinar(
      Validador.naoVazio(valor, Erros.NOME_INVALIDO),
      Validador.tamanhoMenorQue(
        valor,
        NomeCliente.minimo,
        Erros.NOME_MUITO_PEQUENO,
      ),
      Validador.tamanhoMaiorQue(
        valor,
        NomeCliente.maximo,
        Erros.NOME_MUITO_GRANDE,
      ),
    );

    const nomeNormalizado = valor.trim().replace(/\s+/g, " ");
    this.valor = nomeNormalizado;
  }

  static create(valor: string): NomeCliente {
    return new NomeCliente(valor);
  }
}
