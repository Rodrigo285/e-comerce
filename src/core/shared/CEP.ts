import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

export default class CEP {
  readonly valor: string;
  static readonly REGEX = /^\d{5}-?\d{3}$/;
  private constructor(valor: string) {
    if (Validador.regex(valor, CEP.REGEX, Erros.CEP_INVALIDO) !== null) {
      throw new Error(Erros.CEP_INVALIDO);
    }
    const normalizado = valor.trim().replace(/\D/g, "");
    this.valor = normalizado;
  }

  static create(valor: string): CEP {
    return new CEP(valor);
  }

  get formatado() {
    return this.valor.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }
}
