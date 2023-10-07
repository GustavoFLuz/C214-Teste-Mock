import { Horarios } from './Horarios.js';
import { HorariosModel } from "./HorariosModel.js"
import { HorariosService } from './HorariosService';
async function main() {
  const tableBody = document.querySelector("#tabela-body")
  const horarios = new Horarios();
  const horariosService = new HorariosService();

  const stringifiedJson = await horariosService.buscaTodos();
  const dados = JSON.parse(stringifiedJson);
  const listaHorarios = dados.map(horario => new HorariosModel(horario))

  horarios.setHorarios(listaHorarios);
  horarios.render(tableBody)
}

main();

/*  */