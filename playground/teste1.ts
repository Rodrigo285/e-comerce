const nomes = [
  " rodrigo borges ",
  "ana-clara",
  "maria d'oliveira",
  "joão  pedro",
  "josé  de souza",
];

const nome = nomes.map((nome) => {
  const nomeNormalizado = nome.trim().replace(/\s+/g, " ");
  const nomeCapitalizado = nomeNormalizado.replace(
    /^\p{Ll}|(\s|-|')\p{Ll}/gu,
    (correspondeicia) => {
      console.log(correspondeicia);
      return correspondeicia.toUpperCase();
    },
  );
  return nomeCapitalizado;
});

console.log(nome);
