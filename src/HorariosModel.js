export class HorariosModel {
    constructor({ nomeDoProfessor, horarioDeAtendimento, periodo, sala, predio }) {
        this.nomeDoProfessor = nomeDoProfessor;
        this.horarioDeAtendimento = horarioDeAtendimento;
        this.periodo = periodo;
        this.sala = sala;
        this.predio = this.getPredioFromSala(sala, predio);
    }

    getPredioFromSala(sala,predio) {
        const index = Math.ceil(sala / 5) - 1
        return predio[index] || -1
    }
}