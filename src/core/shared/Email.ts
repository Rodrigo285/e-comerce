import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
export default class Email {
  readonly valor: string;
  static readonly REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  private constructor(valor: string) {
    if (typeof valor !== "string") {
      throw new Error(Erros.EMAIL_INVALIDO);
    }

    const normalizado = valor.trim();

    const erros = Validador.combinar(
      Validador.naoNulo(normalizado, Erros.EMAIL_INVALIDO),
      Validador.naoVazio(normalizado, Erros.EMAIL_INVALIDO),
      Validador.regex(normalizado, Email.REGEX, Erros.EMAIL_INVALIDO),
    );

    if (erros) throw new Error(erros.join(","));

    this.valor = normalizado;
  }

  static create(valor: string): Email {
    return new Email(valor);
  }

  get email() {
    return this.valor;
  }

  get usuario() {
    return this.valor.split("@")[0];
  }

  get dominio() {
    return this.valor.split("@")[1];
  }
}
