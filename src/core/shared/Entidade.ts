import Id from "./Id";
export interface EntidadeProps {
  id?: string;
}
export default abstract class Entidade<Tipo, Props extends EntidadeProps> {
  readonly id: Id;
  readonly props: Props;
  constructor(props: Props) {
    this.id = Id.create();
    this.props = { ...props, id: this.id.valor };
  }

  igual(outraEntidade: Entidade<Tipo, Props>): boolean {
    return this.id.igual(outraEntidade.id);
  }

  diferente(outraEntidade: Entidade<Tipo, Props>): boolean {
    return this.id.diferente(outraEntidade.id);
  }
}
