const predios = ["1", "2", "3", "4", "5", "6"]

export class HorariosModel {
    constructor({ nomeDoProfessor, horarioDeAtendimento, periodo, sala, predio }) {
        this.nomeDoProfessor = nomeDoProfessor;
        this.horarioDeAtendimento = horarioDeAtendimento;
        this.periodo = periodo;
        this.sala = sala;
        this.predio = this.getPredioFromSala(sala);
    }

    getPredioFromSala(sala) {
        const index = Math.floor(sala / 5)
        return predios[index] || -1
    }
}