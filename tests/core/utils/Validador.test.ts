import Validador from "../../../src/utils/Validador";
import Erros from "../../../src/constants/Erros";

test("Deve retornar null com um texto descrito", () => {
  const texto = Validador.naoNulo("Bom dia", "texto invalido");

  expect(texto).toBe(null);
});

test("Deve retornar erro ao testar a funcao naoNulo com o valor do texto null", () => {
  const texto = Validador.naoNulo(null, "Texto invalido");
  const msg = "Texto invalido";

  expect(texto).toBe(msg);
});

test("Deve retornar null com um texto descrito", () => {
  const texto = Validador.naoVazio("boa tarde", "texto invalido");

  expect(texto).toBe(null);
});

test("Deve retornar erro ao testar a funcao naoVazio com o valor do texto null", () => {
  const msg = "Texto invalido";
  const texto = Validador.naoVazio(null, msg);

  expect(texto).toBe(msg);
});

test("Deve retornar erro com o valor do texto vazio", () => {
  const msg = "Texto invalido";
  const texto = Validador.naoVazio("      ", msg);

  expect(texto).toBe(msg);
});

test("Deve retornar erro com o valor do texto undefined", () => {
  const msg = "Texto invalido";
  const texto = Validador.naoVazio(undefined, msg);

  expect(texto).toBe(msg);
});

test("Deve retornar null para o seguinte texto Ana", () => {
  const erro = Validador.tamanhoMaiorQue(
    "Ana",
    3,
    Erros.TEXTO_MENOR_QUE_MINIMO,
  );

  expect(erro).toBe(null);
});

test("Deve retornar erro para o seguinte texto Al", () => {
  const erro = Validador.tamanhoMaiorQue("Al", 3, Erros.TEXTO_MENOR_QUE_MINIMO);

  expect(erro).toBe(Erros.TEXTO_MENOR_QUE_MINIMO);
});

test("Deve retornar null para o seguinte texto Maria", () => {
  const erro = Validador.tamanhoMaiorQue(
    "Maria",
    3,
    Erros.TEXTO_MENOR_QUE_MINIMO,
  );

  expect(erro).toBe(null);
});

test("Deve retonar null para o seguinte texto Maria", () => {
  const erro = Validador.tamanhoMaiorQue(
    "Maria",
    5,
    Erros.TEXTO_MAIOR_QUE_MAXIMO,
  );

  expect(erro).toBe(null);
});

test("Deve retornar erro para o seguinte texto Mariana", () => {
  const erro = Validador.tamanhoMaiorQue(
    "Mariana",
    5,
    Erros.TEXTO_MAIOR_QUE_MAXIMO,
  );

  expect(erro).toBe(null);
});
