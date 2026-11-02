import Erros from "../../constants/Erros";

export default class Preco {
  readonly valor: number;

  private constructor(valor: number) {
    if (!Preco.isValido(valor)) throw new Error(Erros.PRECO_INVALIDO);
    this.valor = valor;
  }

  static create(valor: number): Preco {
    return new Preco(valor);
  }

  static isValido(valor: number): boolean {
    return typeof valor === "number" && Number.isFinite(valor) && valor >= 0;
  }

  igual(outro: Preco): boolean {
    return outro instanceof Preco && this.valor === outro.valor;
  }

  soma(outro: Preco): Preco {
    return Preco.create(this.valor + outro.valor);
  }

  subtrair(outro: Preco): Preco {
    return Preco.create(this.valor - outro.valor);
  }

  multiplicar(quantidade: number): Preco {
    if (!Number.isFinite(quantidade) || quantidade <= 0) {
      throw new Error(Erros.PRECO_INVALIDO);
    }
    return Preco.create(this.valor * quantidade);
  }

  calcularPercentual(percentual: number): Preco {
    if (!Number.isFinite(percentual) || percentual <= 0) {
      throw new Error(Erros.PRECO_INVALIDO);
    }
    return Preco.create(this.valor * (percentual / 100));
  }
}
