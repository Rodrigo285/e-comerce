import NomeCliente from "../../../src/core/shared/NomeCliente";
import Erros from "../../../src/constants/Erros";

describe("NomeCliente", () => {
  //Normalizacao
  test("Deve criar um NomeCliente valido", () => {
    const nome = NomeCliente.create("Rodrigo");
    expect(nome).toBeInstanceOf(NomeCliente);
  });

  test("Deve remover o espaços nas laterais", () => {
    const nome = NomeCliente.create("    Rodrigo Borges   ");
    expect(nome.valor).toBe("Rodrigo Borges");
  });

  test("Deve remover espaços duplicados", () => {
    const nome = NomeCliente.create("Rodrigo  Borges");
    expect(nome.valor).toBe("Rodrigo Borges");
  });

  test("Deve aceitar nome com exatamente 3 caracteres", () => {
    const nome = NomeCliente.create("Ana");
    expect(nome.valor).toBe("Ana");
  });

  test("Deve lancar erro ao tentar criar nome com valor numerico", () => {
    expect(() => NomeCliente.create(123 as any)).toThrow(Erros.NOME_INVALIDO);
  });

  test("Deve aceitar nome com exatamente 60 caracteres", () => {
    const valor = "R".repeat(60);
    const nome = NomeCliente.create(valor);
    expect(nome.valor).toBe(valor);
  });

  test("Deve aceitar nome maior que o minimo ", () => {
    const nome = NomeCliente.create("Bete");
    expect(nome.valor).toBe("Bete");
  });

  //Lancar erros

  test("Deve lancar erro ao tentar criar nome menor que o minimo", () => {
    expect(() => NomeCliente.create("An")).toThrow(Erros.NOME_MUITO_PEQUENO);
  });

  test("Deve lancar erro ao tentar criar nome muito grande", () => {
    expect(() => NomeCliente.create("A".repeat(61))).toThrow(
      Erros.NOME_MUITO_GRANDE,
    );
  });

  test("Deve lançar erro ao tentar criar um nome vazio", () => {
    expect(() => NomeCliente.create(" ")).toThrow(Erros.NOME_INVALIDO);
  });

  //Caracteres especiais
  test("Deve aceitar nomes com hifens", () => {
    const nome = NomeCliente.create("Ana-Clara");
    expect(nome.valor).toBe("Ana-Clara");
  });

  test("Deve aceitar nomes com acentuaçao", () => {
    const nome = NomeCliente.create("D'Ávila");
    expect(nome.valor).toBe("D'Ávila");
  });
});
