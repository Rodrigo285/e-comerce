import { v4 as uuid, validate } from "uuid";
import Erros from "../../constants/Erros";

export default class Id {
  readonly valor: string;
  readonly novo: boolean;

  private constructor(valor?: string) {
    this.valor = valor ?? uuid();
    this.novo = !valor;

    if (!validate(this.valor)) throw new Error(Erros.ID_INVALIDO);
  }

  static create() {
    return new Id();
  }

  static from(valor: string): Id {
    return new Id(valor);
  }

  igual(outroId: Id): boolean {
    return this.valor === outroId.valor;
  }

  diferente(outroId: Id): boolean {
    return this.valor !== outroId.valor;
  }
}
