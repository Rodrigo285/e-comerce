import Telefone from "../../../src/core/shared/Telefone";

describe("Telefone", () => {
  test("Deve criar um telefone valido", () => {
    const tel = Telefone.create("17 3323-1234");
    expect(tel).toBeInstanceOf(Telefone);
  });
});
