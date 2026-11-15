import Erros from "../../../src/constants/Erros";
import CEP from "../../../src/core/shared/CEP";
import Endereco from "../../../src/core/shared/Endereco";
import Validador from "../../../src/utils/Validador";

describe("Endereco", () => {
  //OBJETO PARA OS TESTES
  const dadosPadrao = {
    cep: CEP.create("14786-550"),
    logradouro: "Avenida Edson Antonio Marques",
    numero: "256",
    complemento: "Perto da academia",
    bairro: "Jardim Anastácio",
    cidade: "Barretos",
    estado: "SP",
    pais: "Brasil",
  };
  //FUNCAO AUXILIAR PARA TESTAR AS FUNCIONALIDADES DO ENDEREÇO
  function criarEnderecoValido() {
    return Endereco.create({ ...dadosPadrao });
  }

  // 1 CRIAÇAO
  test("Deve criar um endereço valido", () => {
    const endereco = criarEnderecoValido();
    expect(endereco).toBeInstanceOf(Endereco);
  });

  test("Deve retornar um instancia de um endereço", () => {
    const endereco = criarEnderecoValido();
    expect(endereco.cep).toBeInstanceOf(CEP);
    expect(endereco.logradouro).toBe("Avenida Edson Antonio Marques");
  });

  test("Deve manter o cep recebido", () => {
    const endereco = criarEnderecoValido();
    expect(endereco.cep.valor).toBe("14786550");
  });

  // 2 NORMALIZACAO DOS NOMES
  test("Deve remover espaços extras", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      bairro: "   Jardim    Anastácio   ",
    });
    expect(endereco.bairro).toBe("Jardim Anastácio");
  });

  test("Deve capitalizar logradouro", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      logradouro: "avenida edson antonio marques",
    });
    expect(endereco.logradouro).toBe("Avenida Edson Antonio Marques");
  });

  test("Deve capitalizar complemento", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      complemento: "perto da academia",
    });
    expect(endereco.complemento).toBe("Perto Da Academia");
  });

  test("Deve capitalizar bairro", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      bairro: "jardim anastácio",
    });
    expect(endereco.bairro).toBe("Jardim Anastácio");
  });

  test("Deve capitalizar cidade", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      cidade: "barretos",
    });
    expect(endereco.cidade).toBe("Barretos");
  });

  test("Deve capitalizar pais", () => {
    const endereco = Endereco.create({
      ...dadosPadrao,
      pais: "brasil",
    });
    expect(endereco.pais).toBe("Brasil");
  });

  test("Deve normalizar numero", () => {
    const endereco = Endereco.create({ ...dadosPadrao, numero: "  256abc  " });
    expect(endereco.numero).toBe("256ABC");
  });

  test("Deve converter estado para maiusculas", () => {
    const endereco = Endereco.create({ ...dadosPadrao, estado: "  sp  " });
    expect(endereco.estado).toBe("SP");
  });

  //VALLIDACOES

  test("Deve rejeitar numero vazio", () => {
    expect(() => Endereco.create({ ...dadosPadrao, numero: " " })).toThrow(Erros.NUMERO_INVALIDO);
  });
  test("Deve lancar erro ao tentar criar um endereco com logradouro vazio", () => {
    expect(() => Endereco.create({ ...dadosPadrao, logradouro: "   " })).toThrow(
      Erros.LOGRADOURO_INVALIDO,
    );
  });

  test("Deve lancar erro ao tentar criar um endereco com numero invalido", () => {
    expect(() => Endereco.create({ ...dadosPadrao, numero: "abcd1234" })).toThrow(
      Erros.NUMERO_INVALIDO,
    );
  });

  test("Deve lancar erro ao tentar criar um endereco com estado invalido", () => {
    expect(() => Endereco.create({ ...dadosPadrao, estado: "wer" })).toThrow(Erros.ESTADO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um endereco com cidade vazia", () => {
    expect(() => Endereco.create({ ...dadosPadrao, cidade: "   " })).toThrow(Erros.CIDADE_INVALIDA);
  });

  test("Deve lancar erro ao tentar criar um endereco com o bairro vazio", () => {
    expect(() => Endereco.create({ ...dadosPadrao, bairro: "   " })).toThrow(Erros.BAIRRO_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um endereco com pais vazio", () => {
    expect(() => Endereco.create({ ...dadosPadrao, pais: "   " })).toThrow(Erros.PAIS_INVALIDO);
  });

  test("Deve combinar varios erros", () => {
    const erros = Validador.combinar("NUMERO_INVALIDO", "BAIRRO_INVALIDO", "ESTADO_INVALIDO");

    expect(erros).toEqual(["NUMERO_INVALIDO", "BAIRRO_INVALIDO", "ESTADO_INVALIDO"]);
  });

  test("Deve aceitar complemento omitido", () => {
    const endereco = Endereco.create({ ...dadosPadrao, complemento: undefined! });
    expect(endereco.complemento).toBe("");
  });

  test("Deve aceitar complemento peenchido", () => {
    const endereco = Endereco.create({ ...dadosPadrao, complemento: "Apartamento 23 bloco 7" });
    expect(endereco.complemento).toBe("Apartamento 23 Bloco 7");
  });

  test("Deve normalizar um  complemento ", () => {
    const endereco = Endereco.create({ ...dadosPadrao, complemento: "apartamento 23 bloco 7" });
    expect(endereco.complemento).toBe("Apartamento 23 Bloco 7");
  });
});

/*
Plano de testes — Endereco
1. Criação
- Deve criar um endereço válido.
- Deve retornar uma instância de Endereco.
- Deve manter o CEP recebido.
2. Normalização
- Deve remover espaços extras.
- Deve capitalizar logradouro.
- Deve normalizar número.
- Deve capitalizar complemento.
- Deve capitalizar bairro.
- Deve capitalizar cidade.
- Deve converter estado para maiúsculas.
- Deve capitalizar país.
3. Validações
- Deve rejeitar logradouro vazio.
- Deve rejeitar número inválido.
- Deve rejeitar estado inválido.
- Deve rejeitar cidade vazia.
- Deve rejeitar bairro vazio.
- Deve rejeitar país vazio.
- Deve combinar vários erros.
4. Complemento opcional
- Deve aceitar complemento omitido.
- Deve aceitar complemento preenchido.
- Deve normalizar o complemento.
 */
