
export class Horarios {
    constructor() {
        this.horarios = []
    }

    setHorarios(horarios) {
        this.horarios = horarios;
    }

    primeiraLetraMaiuscula(str) {
        return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ")
    }

    formatarElementoTabela(horario) {
        if(isNaN(horario.sala) || horario.sala <=0)
            return ``
        else{
            return `
        <tr>
            <td>${this.primeiraLetraMaiuscula(horario.nomeDoProfessor)}</td>
            <td>${horario.horarioDeAtendimento}</td>
            <td>${this.primeiraLetraMaiuscula(horario.periodo)}</td>
            <td>${horario.sala}</td>
            <td>${horario.predio}</td>
        </tr>
        `
        }
    }

    render(element) {
        element.innerHTML = this.horarios.map(horario => {
            console.log(this.formatarElementoTabela(horario));
            return this.formatarElementoTabela(horario)
        }).join('')
    }
}