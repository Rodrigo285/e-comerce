import Dimensoes from "../shared/Dimensoes";
import Entidade, { EntidadeProps } from "../shared/Entidade";
import NomeProduto from "../shared/NomeProduto";
import Peso from "../shared/Peso";
import Preco from "../shared/Preco";
import SKU from "../shared/SKU";

export interface ProdutoProps extends EntidadeProps {
  sku: string;
  nomeProduto: string;
  preco: number;
  peso: number;
  dimensoes: {
    altura: number;
    largura: number;
    comprimento: number;
  };
}

export default class Produto extends Entidade<Produto, ProdutoProps> {
  readonly sku: SKU;
  readonly nomeProduto: NomeProduto;
  readonly preco: Preco;
  readonly dimensoes: Dimensoes;
  readonly peso: Peso;

  private constructor(props: ProdutoProps) {
    super(props);
    this.sku = SKU.create(props.sku);
    this.nomeProduto = NomeProduto.create(props.nomeProduto);
    this.preco = Preco.create(props.preco);
    this.peso = Peso.create(props.peso);
    this.dimensoes = Dimensoes.create(
      props.dimensoes.altura,
      props.dimensoes.largura,
      props.dimensoes.comprimento,
    );
  }

  static create(props: ProdutoProps): Produto {
    return new Produto(props);
  }
}
