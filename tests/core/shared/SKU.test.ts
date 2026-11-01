import Erros from "../../../src/constants/Erros";
import SKU from "../../../src/core/shared/SKU";

test("Deve criar um SKU valido", () => {
  const sku = SKU.create("CAM-001-AZ");
  expect(sku).toBeInstanceOf(SKU);
});

test("Deve lancar erro para sku incompleto", () => {
  expect(() => SKU.create("CAM-001")).toThrow(Erros.SKU_INVALIDO);
});

test("Deve lancar erro para sku vazio", () => {
  expect(() => SKU.create(" ")).toThrow(Erros.SKU_INVALIDO);
});

test("Deve comparar dois SKUs", () => {
  const sku1 = SKU.create("CAM-001-AZ");
  const sku2 = SKU.create("CAM-001-VM");
  expect(sku1.igual(sku2)).toBe(false);
});
