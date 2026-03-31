import { turma } from "../../listaPreConstruida";

function retornarObjetos() {
    interface Alunas  {
        nome: String,
        media: String,
        aprovado: Boolean;
    }

    const resultados: Alunas[] = turma.map((aluna) => ({
        nome: aluna.nome,
        media: ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(1),
        aprovado: (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3 >= 7
    }));

    return resultados;
}

console.log(retornarObjetos());
