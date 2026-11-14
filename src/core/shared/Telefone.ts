import Erros from "../../constants/Erros";

export default class Telefone {
  private static readonly DDDS: string[] = [
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "21",
    "22",
    "24",
    "27",
    "28",
    "31",
    "32",
    "33",
    "34",
    "35",
    "37",
    "38",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "51",
    "53",
    "54",
    "55",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "71",
    "73",
    "74",
    "75",
    "77",
    "79",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
  ];
  readonly valor: string;

  private constructor(valor?: string) {
    this.valor = valor?.replace(/\D/g, "") ?? "";
    if (!Telefone.isValido(this.valor))
      throw new Error(Erros.TELEFONE_INVALIDO);
  }

  static create(valor: string): Telefone {
    return new Telefone(valor);
  }

  // get DDD() {}

  // get numeroFormatado(){}

  private static isValido(valor: string): boolean {
    if (!valor) return false;
    const numeros = valor.replace(/\D/g, "").split("");
    if ((numeros.length !== 10 && numeros.length !== 11) || numeros[0] === "0")
      return false;
    const ddd = numeros.slice(0, 2).join("");
    if (!Telefone.DDDS.includes(ddd)) return false;
    const numero = numeros.slice(2).join("");
    if (numero.length === 8 && numero[0]! >= "2" && numero[0]! <= "5")
      return true;
    if (numero.length === 9 && numero[0]! === "9") return true;
    return false;
  }
}
