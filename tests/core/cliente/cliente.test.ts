import Cliente from "../../../src/core/cliente/Cliente";
import CEP from "../../../src/core/shared/CEP";
import CPF from "../../../src/core/shared/CPF";
import Email from "../../../src/core/shared/Email";
import Endereco from "../../../src/core/shared/Endereco";
import Entidade from "../../../src/core/shared/Entidade";
import NomeCliente from "../../../src/core/shared/NomeCliente";
import Telefone from "../../../src/core/shared/Telefone";
describe("Cliente", () => {
  //DADOS PARA UTILIZACAO DOS TESTES
  const dadosPadrao = {
    nome: "Rodrigo de Souza borges",
    email: "borgesrodrigo@outlook.com",
    cpf: "52998224725",
    telefone: "17 991234567",
    endereco: {
      cep: CEP.create("14786550"),
      logradouro: "rua jam 9",
      numero: "234",
      complemento: "perto da academia",
      bairro: "jardim anastácio",
      cidade: "barretos",
      estado: "sp",
      pais: "brasil",
    },
  };

  //FUNCAO AUXILIAR PARA UTILIZACAO DOS TESTES
  function criarClienteValido(): Cliente {
    const cliente = Cliente.create({ ...dadosPadrao });
    return cliente;
  }

  //TESTES CRIACAO
  test("Deve criar um cliente valido", () => {
    const cliente = criarClienteValido();
    expect(cliente).toBeInstanceOf(Cliente);
  });

  test("Deve herdar de Entidade", () => {
    const cliente = criarClienteValido();
    expect(cliente).toBeInstanceOf(Entidade);
  });

  test("Deve verificar se nome e um VO NomeCliente", () => {
    const cliente = criarClienteValido();
    expect(cliente.nome).toBeInstanceOf(NomeCliente);
  });

  test("Deve verificar se email e um VO Email", () => {
    const cliente = criarClienteValido();
    expect(cliente.email).toBeInstanceOf(Email);
  });

  test("Deve verificar se cpf e um VO cpf", () => {
    const cliente = criarClienteValido();
    expect(cliente.cpf).toBeInstanceOf(CPF);
  });

  test("Deve verificar se telefone e um VO Telefone", () => {
    const cliente = criarClienteValido();
    expect(cliente.telefone).toBeInstanceOf(Telefone);
  });

  test("Deve verificar endereco e um VO Endereco", () => {
    const cliente = criarClienteValido();
    expect(cliente.endereco).toBeInstanceOf(Endereco);
  });
});
