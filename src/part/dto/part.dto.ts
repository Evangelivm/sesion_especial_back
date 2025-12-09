import { z } from 'zod';

// DTO para crear participante
export const CreateParticipanteDtoSchema = z.object({
  apellido: z.string().min(1, 'El apellido es requerido'),
  nombre: z.string().min(1, 'El nombre es requerido'),
  nacimiento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato de fecha inválido (YYYY-MM-DD)'),
  edad: z.number().int().min(0).max(150),
  sexo: z.enum(['H', 'M'], {
    message: 'El sexo debe ser H o M',
  }),
  id_estaca: z.number().int().positive(),
  id_barrio: z.number().int().positive(),
  id_comp: z.number().int().positive(),
  id_habitacion: z.number().int().positive(),
});

export type CreateParticipanteDto = z.infer<typeof CreateParticipanteDtoSchema>;

// DTO para ID de participante
export const ParticipanteIdDtoSchema = z.object({
  id: z.string().regex(/^\d+$/, 'El ID debe ser un número'),
});

export type ParticipanteIdDto = z.infer<typeof ParticipanteIdDtoSchema>;

// DTO para respuesta de participante básico
export const ParticipanteBasicoDtoSchema = z.object({
  id: z.number(),
  name: z.string(),
  compania: z.string().optional(),
});

export type ParticipanteBasicoDto = z.infer<typeof ParticipanteBasicoDtoSchema>;
