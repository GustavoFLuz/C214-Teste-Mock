import {describe, expect, it} from 'vitest';
import {HorariosModel} from '../src/HorariosModel.js';

describe('building and rooms match test', () => {
    it('should set the building 1 for professor services that use rooms 1-5', () => {
        const horario1 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 1,
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 5,
            predio: ["1", "2", "3", "4", "5", "6"],

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
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 10,
            predio: ["1", "2", "3", "4", "5", "6"],

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
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 15,
            predio: ["1", "2", "3", "4", "5", "6"],

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
            predio: ["1", "2", "3", "4", "5", "6"],

        });

        const horario2 = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 20,
            predio: ["1", "2", "3", "4", "5", "6"],

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
            predio: ["1", "2", "3", "4", "5", "6"],

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
            predio: ["1", "2", "3", "4", "5", "6"],

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

describe('periodo and horarioDeAtendimento match test', () => {
    it('periodo should match horarioDeAtendimento - Noturno', () => {

        const horariosIntegral = ['19:10', '19:20', '19:30', '19:40', '19:50', '20:00', '20:10', '20:20', '20:30', '20:40', '20:50', '21:00', '21:10', '21:20', '21:30', '21:40', '21:50', '22:00', '22:10', '22:20', '22:30', '22:40', '22:50', '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Chris',
                horarioDeAtendimento: '19:30',
                periodo: 'noturno',
                sala: 17,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(mockHorario.periodo).toEqual('noturno')
        expect(horariosIntegral).toContain(mockHorario.horarioDeAtendimento)

    })
    it('periodo should match horarioDeAtendimento - Integral', () => {

        const horariosIntegral = ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50', '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00', '11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40', '15:50', '16:00', '16:10', '16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20', '17:30', '17:40', '17:50', '18:00', '18:10', '18:20', '18:30', '18:40', '18:50', '19:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Marcelo',
                horarioDeAtendimento: '16:10',
                periodo: 'integral',
                sala: 12,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(mockHorario.periodo).toEqual('integral')
        expect(horariosIntegral).toContain(mockHorario.horarioDeAtendimento)

    })
    it.fails('periodo should not match horarioDeAtendimento - Noturno', () => {

        const horariosNoturno = ['19:10', '19:20', '19:30', '19:40', '19:50', '20:00', '20:10', '20:20', '20:30', '20:40', '20:50', '21:00', '21:10', '21:20', '21:30', '21:40', '21:50', '22:00', '22:10', '22:20', '22:30', '22:40', '22:50', '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Chris',
                horarioDeAtendimento: '13:30',
                periodo: 'noturno',
                sala: 17,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(horariosNoturno).toContain(mockHorario.horarioDeAtendimento)

    })
    it.fails('periodo should not match horarioDeAtendimento - Integral', () => {

        const horariosIntegral = ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50', '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00', '11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40', '15:50', '16:00', '16:10', '16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20', '17:30', '17:40', '17:50', '18:00', '18:10', '18:20', '18:30', '18:40', '18:50', '19:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Marcelo',
                horarioDeAtendimento: '20:10',
                periodo: 'integral',
                sala: 12,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(horariosIntegral).toContain(mockHorario.horarioDeAtendimento)

    })
    it.fails('horarioDeAtendimento should not match periodo - Noturno', () => {

        const horariosNoturno = ['19:10', '19:20', '19:30', '19:40', '19:50', '20:00', '20:10', '20:20', '20:30', '20:40', '20:50', '21:00', '21:10', '21:20', '21:30', '21:40', '21:50', '22:00', '22:10', '22:20', '22:30', '22:40', '22:50', '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Chris',
                horarioDeAtendimento: '13:30',
                periodo: 'noturno',
                sala: 17,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(mockHorario.periodo).toEqual('integral')

    })
    it.fails('horarioDeAtendimento should not match periodo - Integral', () => {

        const horariosIntegral = ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20', '09:30', '09:40', '09:50', '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00', '11:10', '11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30', '15:40', '15:50', '16:00', '16:10', '16:20', '16:30', '16:40', '16:50', '17:00', '17:10', '17:20', '17:30', '17:40', '17:50', '18:00', '18:10', '18:20', '18:30', '18:40', '18:50', '19:00']

        const mockHorario =
            {
                nomeDoProfessor: 'Marcelo',
                horarioDeAtendimento: '20:10',
                periodo: 'integral',
                sala: 12,
                predio: ['1', '2', '3', '4', '5']
            };

        expect(mockHorario.periodo).toEqual('noturno')

    })
})