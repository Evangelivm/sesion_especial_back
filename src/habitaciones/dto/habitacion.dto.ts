import { z } from 'zod';
import { OcupanteDtoSchema } from './ocupante.dto';

export const HabitacionDtoSchema = z.object({
  id_habitacion: z.number(),
  habitacion: z.string(),
  sexo: z.enum(['H', 'M']),
  camas: z.number().nonnegative().default(0),
  ocupados: z.number().nonnegative().default(0),
  libres: z.number().int().default(0),
  ocupantes: z.array(OcupanteDtoSchema),
});

export type HabitacionDto = z.infer<typeof HabitacionDtoSchema>;
