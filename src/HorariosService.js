export class HorariosService {
    async buscaPorNome(nome) {
        return new Promise((resolve, reject) => {
            // SIMULAÇÂO DE REQUISIÇÂO PRO SERVICO
            setTimeout(() => {
                const dados = getDados().filter(horario => horario.nomeDoProfessor === nome)
                if (!dados.length)
                    return reject("Professor não cadastrado")
                return resolve(JSON.stringify(dados))
            }, 1000)
        })
    }

    async buscaTodos() {
        return new Promise((resolve, reject) => {
            // SIMULAÇÂO DE REQUISIÇÂO PRO SERVICO
            setTimeout(() => {
                resolve(JSON.stringify(getDados()))
            }, 1000)
        })
    }
}

// Simulação do retorno da conexão com um servidor remoto.
function getDados() {
    return [
        {
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 1,
            predio: ['1', '2', '3', '4', '5']
        },
        {
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "15:30",
            periodo: "integral",
            sala: 7,
            predio: ['1', '2', '3', '4', '5']
        },
        {
            nomeDoProfessor: "renzo",
            horarioDeAtendimento: "21:30",
            periodo: "noturno",
            sala: 12,
            predio: ['1', '2', '3', '4', '5']
        },
        {
            nomeDoProfessor: "renzo",
            horarioDeAtendimento: "13:30",
            periodo: "integral",
            sala: 16,
            predio: ['1', '2', '3', '4', '5']
        },
        {
            nomeDoProfessor: "marcelo",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 22,
            predio: ['1', '2', '3', '4', '5']
        },
        {
            nomeDoProfessor: "marcelo",
            horarioDeAtendimento: "15:30",
            periodo: "integral",
            sala: 3,
            predio: ['1', '2', '3', '4', '5']
        },
    ]
}