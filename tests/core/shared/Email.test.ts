import Erros from "../../../src/constants/Erros";
import Email from "../../../src/core/shared/Email";

describe("Email", () => {
  //normalizacao
  test("Deve criar um email valido", () => {
    const email = Email.create("rodrigo@email.com");
    expect(email).toBeInstanceOf(Email);
  });

  test("Deve criar um email valido removendo os espaços", () => {
    const email = Email.create("  rodrigo@email.com  ");
    expect(email.valor).toBe("rodrigo@email.com");
  });

  test("Deve retornar o nome do usuario", () => {
    const email = Email.create("rodrigo@email.com");
    expect(email.usuario).toBe("rodrigo");
  });

  test("Deve retornar o dominio", () => {
    const email = Email.create("rodrigo@email.com");
    expect(email.dominio).toBe("email.com");
  });

  test("Deve retornar o email completo", () => {
    const email = Email.create("rodrigo@email.com");
    expect(email.email).toBe("rodrigo@email.com");
  });

  //validaçao
  test("Deve lancar erro ao tentar criar um email vazio", () => {
    expect(() => Email.create(" ")).toThrow(Erros.EMAIL_INVALIDO);
  });

  test("Deve lancar erro ao tentar criar um email com dados invalidos", () => {
    expect(() => Email.create(1234 as any)).toThrow(Erros.EMAIL_INVALIDO);
  });
});
