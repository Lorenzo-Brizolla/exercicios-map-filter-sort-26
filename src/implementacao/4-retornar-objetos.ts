import { Alunas } from './../../listaPreConstruida';
import { turma } from "../../listaPreConstruida";

function retornarObjetos() {
    type Alunas = {
        nome: String,
        media: Number,
        aprovado: Boolean;
    }

    const resultados: Alunas[] = turma.map((aluna) => ({
        nome: String,
        media: Number
    }));
}