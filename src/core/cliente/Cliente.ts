import CPF from "../shared/CPF";
import Email from "../shared/Email";
import Endereco, { EnderecoProps } from "../shared/Endereco";
import Entidade, { EntidadeProps } from "../shared/Entidade";
import NomeCliente from "../shared/NomeCliente";
import Telefone from "../shared/Telefone";

export interface ClienteProps extends EntidadeProps {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  endereco: EnderecoProps;
}

export default class Cliente extends Entidade<Cliente, ClienteProps> {
  readonly nome: NomeCliente;
  readonly email: Email;
  readonly cpf: CPF;
  readonly telefone: Telefone;
  readonly endereco: Endereco;

  private constructor(props: ClienteProps) {
    super(props);
    this.nome = NomeCliente.create(props.nome);
    this.email = Email.create(props.email);
    this.cpf = CPF.create(props.cpf);
    this.telefone = Telefone.create(props.telefone);
    this.endereco = Endereco.create(props.endereco);
  }

  static create(props: ClienteProps): Cliente {
    return new Cliente(props);
  }
}
