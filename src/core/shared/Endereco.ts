import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
import CEP from "./CEP";

export interface EnderecoProps {
  cep: CEP;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
}

export default class Endereco implements EnderecoProps {
  readonly cep: CEP;
  readonly logradouro: string;
  readonly numero: string;
  readonly complemento: string;
  readonly bairro: string;
  readonly cidade: string;
  readonly estado: string;
  readonly pais: string;

  private constructor(props: EnderecoProps) {
    const logradouro = Endereco.normalizarLogradouro(props.logradouro);
    const numero = Endereco.normalizarNumero(props.numero);
    const complemento = Endereco.normalizarComplemento(props.complemento ?? "");
    const bairro = Endereco.normalizarBairro(props.bairro);
    const cidade = Endereco.normalizarCidade(props.cidade);
    const estado = Endereco.normalizarEstado(props.estado);
    const pais = Endereco.normalizarPais(props.pais);

    const erros = Validador.combinar(
      Endereco.validarLogradouro(logradouro, Erros.LOGRADOURO_INVALIDO),
      Endereco.validarNumero(numero, Erros.NUMERO_INVALIDO),
      Endereco.validarEstado(estado, Erros.ESTADO_INVALIDO),
      Endereco.validarCidade(cidade, Erros.CIDADE_INVALIDA),
      Endereco.validarBairro(bairro, Erros.BAIRRO_INVALIDO),
      Endereco.validarPais(pais, Erros.PAIS_INVALIDO),
    );

    if (erros) throw new Error(erros.join(","));

    this.cep = props.cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
  }

  static create(props: EnderecoProps): Endereco {
    return new Endereco(props);
  }

  //FUNCOES PARA TRANSFORMAR OS NOMES

  private static normalizarLogradouro(valor: string): string {
    return this.capitalizarTexto(valor);
  }

  private static normalizarNumero(valor: string): string {
    const numeroNormalizado = valor.trim().toUpperCase();
    return numeroNormalizado;
  }

  private static normalizarComplemento(valor: string): string {
    return this.capitalizarTexto(valor);
  }

  private static normalizarBairro(valor: string): string {
    return this.capitalizarTexto(valor);
  }

  private static normalizarCidade(valor: string): string {
    return this.capitalizarTexto(valor);
  }

  private static normalizarEstado(valor: string): string {
    return this.capitalizarTexto(valor).toUpperCase();
  }

  private static normalizarPais(valor: string): string {
    return this.capitalizarTexto(valor);
  }

  //FUNCAO AUXILIAR PARA TRANSFORMAR OS NOMES

  private static capitalizarTexto(valor: string): string {
    const valorNormalizado = valor.trim().replace(/\s+/g, " ");

    if (valorNormalizado !== "") {
      const valorCapitalizado = valorNormalizado.split(" ");

      const palavrasCapitalizada = valorCapitalizado.map((palavra) => {
        return palavra[0]!.toUpperCase() + palavra.slice(1).toLowerCase();
      });
      return palavrasCapitalizada.join(" ");
    }
    return "";
  }

  //FUNCOES PARA REALIZAR A VALIDAÇAO

  private static validarLogradouro(valorNormalizado: string, erro: string): string | null {
    if (!valorNormalizado) return erro;
    return null;
  }

  private static validarNumero(numeroNormalizado: string, erro: string): null | string {
    if (!numeroNormalizado) return erro;
    if (!/^(?:\d+[A-Z]*|S\/N)$/.test(numeroNormalizado)) return erro;
    return null;
  }

  private static validarEstado(estadoNormalizado: string, erro: string): null | string {
    if (!Endereco.UFS.includes(estadoNormalizado)) return erro;
    return null;
  }

  private static validarCidade(cidadeNormalizada: string, erro: string): null | string {
    if (!cidadeNormalizada) return erro;
    return null;
  }

  private static validarBairro(bairroNormalizado: string, erro: string): null | string {
    if (!bairroNormalizado) return erro;
    return null;
  }

  private static validarPais(paisNormalizado: string, erro: string): null | string {
    if (!paisNormalizado) return erro;
    return null;
  }

  private static readonly UFS = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
}
