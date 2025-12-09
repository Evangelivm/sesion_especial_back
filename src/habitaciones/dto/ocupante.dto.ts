import { z } from 'zod';

export const OcupanteDtoSchema = z.object({
  id: z.number(),
  nombre: z.string(),
  edad: z.number(),
  compania: z.string(),
  tipo: z.enum(['Staff', 'Participante']),
});

export type OcupanteDto = z.infer<typeof OcupanteDtoSchema>;
