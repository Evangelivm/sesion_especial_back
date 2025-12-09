import { z } from 'zod';

// DTO para intercambio de participantes
export const IntercambioParticipantesDtoSchema = z.object({
  persona1_id: z.number().positive(),
  persona2_id: z.number().positive(),
});

export type IntercambioParticipantesDto = z.infer<
  typeof IntercambioParticipantesDtoSchema
>;

// DTO para cambio de compañía
export const CambioCompaniaDtoSchema = z.object({
  persona_id: z.number().positive(),
  nueva_compania_id: z.number().positive(),
});

export type CambioCompaniaDto = z.infer<typeof CambioCompaniaDtoSchema>;

// DTO para respuesta de compañía
export const CompaniaDtoSchema = z.object({
  id_comp: z.number(),
  comp: z.string(),
});

export type CompaniaDto = z.infer<typeof CompaniaDtoSchema>;
