import { turma } from "../../listaPreConstruida"
function retornarMaiorMedia() {
    const alunosComMedia = turma.map((aluno) => ({
        nome: aluno.nome,
        media: (aluno.prova.p1 + aluno.prova.p2 + aluno.prova.p3) / 3
    }));
    alunosComMedia.sort((a, b) => b.media - a.media)
        
    return alunosComMedia[0].nome;
}

console.log(retornarMaiorMedia());


