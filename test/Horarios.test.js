import {Horarios} from '../src/Horarios.js';
import {HorariosModel} from '../src/HorariosModel.js';
import {describe, beforeEach, it, expect} from 'vitest';

describe('Horarios', () => {
    let horarios;
    beforeEach(() => {
        horarios = new Horarios();
    });
    describe('setHorarios', () => {
        it('Deve definir o array the horarios', () => {
            const mockHorarios = [
                {
                    nomeDoProfessor: 'Bruno',
                    horarioDeAtendimento: '19:30',
                    periodo: 'noturno',
                    sala: 1,
                    predio: ["1", "2", "3", "4", "5"],
                },
                {
                    nomeDoProfessor: 'Bruno',
                    horarioDeAtendimento: '10:30',
                    periodo: 'integral',
                    sala: 14,
                    predio: ['1', '2', '3', '4', '5'],
                },
            ];

            horarios.setHorarios(mockHorarios);

            expect(horarios.horarios).toEqual(mockHorarios);
        });
    });
    describe('primeiraLetraMaiuscula', () => {
        it('A primeira letra deve ficar maiúscula', () => {
            const str = 'joão da silva';
            const expected = 'João Da Silva';

            expect(horarios.primeiraLetraMaiuscula(str)).toEqual(expected);
        });
    });
    describe('formatarElementoTabela', () => {
        it('should format a horario object into an HTML table row', () => {
            const horario = new HorariosModel({
                nomeDoProfessor: 'Bruno',
                horarioDeAtendimento: '10:30',
                periodo: 'integral',
                sala: 14,
                predio: ["1", "2", "3", "4", "5", "6"],
            });
            const expected = `
            <tr>
                <td>Bruno</td>
                <td>10:30</td>
                <td>Integral</td>
                <td>14</td>
                <td>3</td>
            </tr>
            `;

            expect(horarios.formatarElementoTabela(horario).replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
        });

        it('should not crate any HTML table row if sala is Not a number', () => {
            const horario = new HorariosModel({
                nomeDoProfessor: 'Bruno',
                horarioDeAtendimento: '10:30',
                periodo: 'integral',
                sala: "sabgs",
                predio: ["1", "2", "3", "4", "5", "6"],

            });
            const expected = '';

            expect(horarios.formatarElementoTabela(horario)).toEqual(expected);
        });

        it('should not crate any HTML table row if sala is less than 0', () => {
            const horario = new HorariosModel({
                nomeDoProfessor: 'Bruno',
                horarioDeAtendimento: '10:30',
                periodo: 'integral',
                sala: 0,
                predio: ["1", "2", "3", "4", "5", "6"],
            });
            const expected = '';

            expect(horarios.formatarElementoTabela(horario)).toEqual(expected);
        });

        it('should not crate any HTML table row if name is undefined', () => {
            const horario = new HorariosModel({
                nomeDoProfessor: undefined,
                horarioDeAtendimento: '10:30',
                periodo: 'integral',
                sala: 0,
                predio: ["1", "2", "3", "4", "5", "6"],
            });
            const expected = '';

            expect(horarios.formatarElementoTabela(horario)).toEqual(expected);
        });
    })
})