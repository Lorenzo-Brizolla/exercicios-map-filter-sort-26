import { turma } from "../../listaPreConstruida";

function retornarMediaTurma() {
    const mediasIndividuais = turma.map((nota) => {
        return (nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3
    })

    let somaMedias = mediasIndividuais.reduce((mediaFinal, media) => {
        return mediaFinal + media;
    }, 0);

    const MediaFinal = Number((somaMedias / mediasIndividuais.length).toFixed(1));

    return MediaFinal;
}

console.log(retornarMediaTurma());
