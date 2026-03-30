import { turma } from "../../listaPreConstruida";

function retornarAprovadas(): string[] {
  const aprovadas: string[] = turma
    .filter((aluna) => (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3 >= 7)
    .map((aluna) => aluna.nome);

  return aprovadas;
}

console.log(retornarAprovadas());
