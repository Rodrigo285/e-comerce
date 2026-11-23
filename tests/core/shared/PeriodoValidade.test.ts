import Erros from "../../../src/constants/Erros";
import PeriodoValidade from "../../../src/core/shared/PeriodoValidade";

describe("Periodovalidade", () => {
  test("Deve criar um periodo de validade valido", () => {
    const inicio = new Date("2026-11-22");
    const fim = new Date("2026-12-31");

    const periodo = PeriodoValidade.create(inicio, fim);

    expect(periodo).toBeInstanceOf(PeriodoValidade);

    expect(periodo.valorInicial).not.toBe(inicio);
    expect(periodo.valorFinal).not.toBe(fim);

    expect(periodo.valorInicial.getTime()).toBe(
      new Date("2026-11-22T00:00:00.000Z").getTime(),
    );

    expect(periodo.valorFinal.getTime()).toBe(
      new Date("2026-12-31T23:59:59.999Z").getTime(),
    );
  });

  test("Deve lancar erro quando as datas forem iguais", () => {
    const data = new Date("2026-11-22");
    expect(() => PeriodoValidade.create(data, data)).toThrow(
      Erros.PERIODO_VALIDADE_INVALIDO,
    );
  });

  test("Deve lancar erro quando as datas forem invertidas", () => {
    const inicio = new Date("2026-12-31");
    const fim = new Date("2026-11-22");
    expect(() => PeriodoValidade.create(inicio, fim)).toThrow(
      Erros.PERIODO_VALIDADE_INVALIDO,
    );
  });

  test("Deve lancar erro quando a data inicial for invalida", () => {
    const inicio = new Date("data-invalida");
    const fim = new Date("2026-11-22");
    expect(() => PeriodoValidade.create(inicio, fim)).toThrow(
      Erros.PERIODO_VALIDADE_INVALIDO,
    );
  });

  test("Deve lancar erro quando a data final for invalida", () => {
    const inicio = new Date("2026-11-22");
    const fim = new Date("data-invalida");
    expect(() => PeriodoValidade.create(inicio, fim)).toThrow(
      Erros.PERIODO_VALIDADE_INVALIDO,
    );
  });

  test("Deve verificar se a data esta no periodo valido", () => {
    const inicio = new Date("2026-11-22");
    const fim = new Date("2026-12-31");
    const data = new Date("2026-12-15");
    const periodo = PeriodoValidade.create(inicio, fim);
    expect(periodo.dataEstaNoPeriodo(data)).toBe(true);
  });

  test("Deve verificar se a data esta no periodo valido", () => {
    const inicio = new Date("2026-11-22");
    const fim = new Date("2026-12-31");
    const data = new Date("data-invalida");
    const periodo = PeriodoValidade.create(inicio, fim);
    expect(periodo.dataEstaNoPeriodo(data)).toBe(false);
  });
});
