import { describe, expect, it } from 'vitest';
import { HorariosModel } from '../src/HorariosModel.js';

describe('HorariosModel', () => {
    it('should set the building 1 for professor services that use rooms 1-5', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 1,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 5,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('1');
        expect(horario2.predio).toEqual('1');
    });

    it('should set the building 2 for professor services that use rooms 6-10', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 6,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 10,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('2');
        expect(horario2.predio).toEqual('2');
    });

    it('should set the building 3 for professor services that use rooms 11-15', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 11,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 15,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('3');
        expect(horario2.predio).toEqual('3');
    });

    it('should set the building 4 for professor services that use rooms 16-20', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 16,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 20,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('4');
        expect(horario2.predio).toEqual('4');
    });

    it('should set the building 5 for professor services that use rooms 21-25', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 21,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 25,
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('5');
        expect(horario2.predio).toEqual('5');
    });

    it('should set the building 6 for professor services that use rooms 26-30', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 26,
            predio : ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 30,
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        expect(horario1.predio).toEqual('6');
        expect(horario2.predio).toEqual('6');
    });
});