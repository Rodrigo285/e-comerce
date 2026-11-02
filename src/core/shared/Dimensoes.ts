import Erros from "../../constants/Erros";

export default class Dimensoes {
  readonly altura: number;
  readonly largura: number;
  readonly comprimento: number;

  private constructor(altura: number, largura: number, comprimento: number) {
    if (
      !Dimensoes.medidaIsValida(altura) ||
      !Dimensoes.medidaIsValida(largura) ||
      !Dimensoes.medidaIsValida(comprimento)
    )
      throw new Error(Erros.DIMENSOES_INVALIDAS);

    this.altura = altura;
    this.largura = largura;
    this.comprimento = comprimento;
  }

  static create(altura: number, largura: number, comprimento: number): Dimensoes {
    return new Dimensoes(altura, largura, comprimento);
  }

  igual(outra: Dimensoes): boolean {
    return (
      this.altura === outra.altura &&
      this.largura === outra.largura &&
      this.comprimento === outra.comprimento
    );
  }

  static medidaIsValida(valor: number): boolean {
    return typeof valor === "number" && Number.isFinite(valor) && valor > 0;
  }
}
