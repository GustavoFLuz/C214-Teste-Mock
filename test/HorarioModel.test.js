import { describe, expect, it } from 'vitest';
import { HorariosModel } from '../src/HorariosModel.js';

describe('HorariosModel', () => {
    it('should set the correct building for professor services based on class number', () => {
        const horario = new HorariosModel({
            nomeDoProfessor: "chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: 14,

        });

        expect(horario.predio).toEqual('3');
    });
});