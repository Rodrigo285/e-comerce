import Produto from "../../../src/core/produto/Produto";
import Id from "../../../src/core/shared/Id";

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
    expect(produto1).toBeInstanceOf(Produto);
  });

  test("Deve criar um produto com id", () => {
    const props = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };
    const produto2 = Produto.create(props);
    expect(produto2.id).toBeInstanceOf(Id);
  });

  test("Deve retornar false para produtos com Id diferente", () => {
    const props = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const props1 = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const produto1 = Produto.create(props);
    const produto2 = Produto.create(props1);

    expect(produto1.igual(produto2)).toBe(false);
  });

  test("Deve retornar true para produtos com Id diferente", () => {
    const props = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const props1 = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const produto1 = Produto.create(props);
    const produto2 = Produto.create(props1);

    expect(produto1.diferente(produto2)).toBe(true);
  });

  test("Deve verificar se dois produtos diferentes sao criado a partir do mesmo id", () => {
    const id = Id.create();
    const props1 = {
      sku: "NOT-002-PT",
      nomeProduto: "Notebook",
      preco: 4500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const props2 = {
      sku: "NOT-002-CZ",
      nomeProduto: "Notebook",
      preco: 5500,
      peso: 2.5,
      dimensoes: {
        altura: 30,
        largura: 40,
        comprimento: 20,
      },
    };

    const produto1 = Produto.create({ ...props1, id: id.valor });
    const produto2 = Produto.create({ ...props2, id: id.valor });

    console.log(produto1, produto2);

    expect(produto1.igual(produto2)).toBe(true);
  });
});
