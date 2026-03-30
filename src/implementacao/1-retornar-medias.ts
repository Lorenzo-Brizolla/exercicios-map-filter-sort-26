import { turma } from "../../listaPreConstruida";

function retornarMedias() {
  const medias: string[] = turma.map((nota) =>
    ((nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3).toFixed(2)
  );

  return medias;
}

console.log(retornarMedias());



