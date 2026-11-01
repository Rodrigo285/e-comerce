import Validador from "../../utils/Validador";
import Erros from "../../constants/Erros";

export default class SKU {
  readonly valor: string;
  static readonly REGEX = /^[A-Z]{3}-\d{3}-[A-Z]{2}$/;

  constructor(valor: string) {
    const skuNormalizado = valor.trim();
    const erro = SKU.isValido(skuNormalizado);
    if (erro) {
      throw new Error(erro);
    }
    this.valor = skuNormalizado;
  }

  static create(valor: string): SKU {
    return new SKU(valor);
  }

  static isValido(valor: string): null | string {
    return Validador.regex(valor, SKU.REGEX, Erros.SKU_INVALIDO);
  }

  igual(outro: SKU): boolean {
    return this.valor === outro.valor;
  }
}
