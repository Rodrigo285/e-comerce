import Endereco from "../src/core/shared/Endereco";
import CEP from "../src/core/shared/CEP";

function capitalizarTexto(valor: string): string {
  const valorNormalizado = valor.trim().replace(/\s+/g, " ");

  if (valorNormalizado !== "") {
    const valorCapitalizado = valorNormalizado.split(" ");

    const palavrasCapitalizadas = valorCapitalizado.map((palavra) => {
      return palavra[0]!.toUpperCase() + palavra.slice(1).toLowerCase();
    });

    return palavrasCapitalizadas.join(" ");
  }

  return "";
}

console.log(capitalizarTexto("RUA JAM 9"));
console.log(capitalizarTexto("   JARDIM ANASTACIO "));
console.log(capitalizarTexto("SANTA   CECILIA"));
console.log(capitalizarTexto("   "));

const endereco = Endereco.create({
  cep: CEP.create("14780-000"),
  logradouro: " rua das flores ",
  numero: " 125a ",
  complemento: " bloco b ",
  bairro: " jardim america ",
  cidade: " barretos ",
  estado: " sp ",
  pais: " brasil ",
});

//console.log(endereco);

const endereco2 = Endereco.create({
  cep: CEP.create("14780-000"),
  logradouro: " rua das flores ",
  numero: " 125a ",
  //complemento: " bloco b ",
  bairro: " jardim america  ",
  cidade: " barretos   ",
  estado: " sp ",
  pais: " brasil ",
});

console.log(endereco2);

const endereco3 = Endereco.create({
  cep: CEP.create("14780-000"),
  logradouro: " rua das flores ",
  numero: " 125a ",
  complemento: " bloco b ",
  bairro: " jardim america  ",
  cidade: " barretos   ",
  estado: " sp ",
  pais: " brasil ",
});

console.log(endereco3);
