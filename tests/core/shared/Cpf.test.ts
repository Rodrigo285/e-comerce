import CPF from "../../../src/core/shared/CPF";
describe("Cpf", () => {
  test("Deve criar um cpf valido", () => {
    const cpf = CPF.create("218.022.018-90");
    expect(cpf).toBeInstanceOf(CPF);
  });
});
