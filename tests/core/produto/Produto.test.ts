import Produto from "../../../src/core/produto/Produto";

describe("Produto", () => {
  test("Deve criar um Produto Valido", () => {
    const props = {
      sku: "NOT-001-CZ",
      nomeProduto: "Notebook",
      preco: 3500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };
    const produto1 = Produto.create(props);
    console.log(produto1);
    expect(produto1).toBeInstanceOf(Produto);
  });
});
