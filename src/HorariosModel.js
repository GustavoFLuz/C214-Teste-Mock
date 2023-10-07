export class HorariosModel {
    constructor({ nomeDoProfessor, horarioDeAtendimento, periodo, sala, predio }) {
        this.nomeDoProfessor = nomeDoProfessor;
        this.horarioDeAtendimento = horarioDeAtendimento;
        this.periodo = periodo;
        this.sala = sala;
        this.predio = this.getPredioFromSala(sala, predio);
    }

    getPredioFromSala(sala, predios) {
        const index = Math.floor(sala / 5)
        return predios[index] || -1
    }
}