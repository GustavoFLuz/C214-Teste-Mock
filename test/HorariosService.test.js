import {describe, expect, it} from "vitest";
import {HorariosService} from "./mock/HorariosServiceMock.js";

describe('HorariosService Test', () => {

    it('buscaPorNome Test', async () => {
        const service = new HorariosService()
        const result = await service.buscaPorNome('chris')
        expect(result).toEqual(JSON.stringify(
            [{
                    "nomeDoProfessor": "chris",
                    "horarioDeAtendimento": "19:30",
                    "periodo": "noturno",
                    "sala": 1,
                    "predio": ["1", "2", "3", "4", "5"]
                },
                {
                    "nomeDoProfessor": "chris",
                    "horarioDeAtendimento": "15:30",
                    "periodo": "integral",
                    "sala": 7,
                    "predio": ["1", "2", "3", "4", "5"]
                }]
        ))
    });

    it('non-existent professor test', async () => {
        const service = new HorariosService()
        try {
            const result = await service.buscaPorNome('Edras')
        } catch (error) {
            expect(error).toEqual('Professor não cadastrado')
        }
    });

    it('buscaTodos Test', async () => {
        const service = new HorariosService()
        const result = await service.buscaTodos()
        expect(result).toEqual(JSON.stringify([
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
        ]))
    });
});