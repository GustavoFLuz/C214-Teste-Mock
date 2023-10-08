import {jsonString} from "./HorariosConst"

export class HorariosService {
    async buscaPorNome(nome) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock da função getDados()
                const dados = jsonString.filter(horario => horario.nomeDoProfessor === nome)
                if (!dados.length)
                    return reject("Professor não cadastrado")
                return resolve(JSON.stringify(dados))
            }, 1000)
        })
    }

    async buscaTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock da função getDados()
                resolve(JSON.stringify(jsonString))
            }, 1000)
        })
    }
}