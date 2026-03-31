import { turma } from "../../listaPreConstruida";

function retornarMenorMedia() {
  const alunosComMedia = turma.map((aluno) => ({
    nome: aluno.nome,
    media: (aluno.prova.p1 + aluno.prova.p2 + aluno.prova.p3) / 3,
  }));
  alunosComMedia.sort((a, b) => a.media - b.media);

  return alunosComMedia[0].nome;
}

console.log(retornarMenorMedia());
