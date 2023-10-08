import {describe, expect, it, test} from "vitest";
import {HorariosService} from "./mock/HorariosServiceMock.js";

describe('HorariosService Test', () => {
    it('buscaPorNome Test', async () => {
        const dados = JSON.stringify([{
            "nomeDoProfessor": "chris",
            "horarioDeAtendimento": "19:30",
            "periodo": "noturno",
            "sala": 1,
            "predio": ["1", "2", "3", "4", "5"]
        }, {
            "nomeDoProfessor": "chris",
            "horarioDeAtendimento": "15:30",
            "periodo": "integral",
            "sala": 7,
            "predio": ["1", "2", "3", "4", "5"]
        }])
        const service = new HorariosService()
        const result = await service.buscaPorNome('chris')
        expect(result).toEqual(dados)
    });
    it.fails('return wrong professor data', async () => {
        const dados = JSON.stringify([
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
            }
        ])
        const service = new HorariosService()
        const result = await service.buscaPorNome('chris')
        expect(result).toContain(dados)
    });
    it('non-existent professor test', async () => {
        const service = new HorariosService()
        expect(service.buscaPorNome('Edras')).rejects.toEqual('Professor não cadastrado')
    });
    it('no name provided test', async () => {
        const service = new HorariosService()
        expect(service.buscaPorNome('')).rejects.toEqual('Professor não cadastrado')
    });
    it('provided null test', async () => {
        const service = new HorariosService()
        expect(service.buscaPorNome(null)).rejects.toEqual('Professor não cadastrado')
    });
    it('buscaTodos Test', async () => {
        const dados = JSON.stringify([{
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 1,
            predio: ['1', '2', '3', '4', '5']
        }, {
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "15:30",
            periodo: "integral",
            sala: 7,
            predio: ['1', '2', '3', '4', '5']
        }, {
            nomeDoProfessor: "renzo",
            horarioDeAtendimento: "21:30",
            periodo: "noturno",
            sala: 12,
            predio: ['1', '2', '3', '4', '5']
        }, {
            nomeDoProfessor: "renzo",
            horarioDeAtendimento: "13:30",
            periodo: "integral",
            sala: 16,
            predio: ['1', '2', '3', '4', '5']
        }, {
            nomeDoProfessor: "marcelo",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 22,
            predio: ['1', '2', '3', '4', '5']
        }, {
            nomeDoProfessor: "marcelo",
            horarioDeAtendimento: "15:30",
            periodo: "integral",
            sala: 3,
            predio: ['1', '2', '3', '4', '5']
        },])
        const service = new HorariosService()
        const result = await service.buscaTodos()
        expect(result).toEqual(dados)
    });
});