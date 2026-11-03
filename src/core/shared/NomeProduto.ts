import Validador from "../../utils/Validador";
import Erros from "../../constants/Erros";

export default class NomeProduto {
  readonly valor: string;

  private constructor(valor: string) {
    const nome = valor.trim();
    const nomeFormatado = nome.replace(/\s+/g, " ");
  }

  static create(valor: string): NomeProduto {
    return new NomeProduto(valor);
  }

  static isValido(valor: string): boolean {}
}
