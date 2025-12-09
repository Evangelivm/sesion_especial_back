import { z } from 'zod';

// Esquema para validar datos que vienen del frontend
export const DatosImportSchema = z.object({
  nombre: z.string().min(1, 'Nombre es requerido'),
  apellido: z.string().min(1, 'Apellido es requerido'),
  edad: z.number().int().positive('Edad debe ser un número positivo'),
  nacimiento: z.string().nullable().optional(),
  id_sesion: z.number().int().positive('ID de sesión es requerido'),
  id_estaca: z.number().int().positive('ID de estaca es requerido'),
  id_barrio: z.number().int().positive('ID de barrio es requerido'),
  id_comp: z.number().int().positive('ID de comp es requerido'),
  id_habitacion: z.number().int().positive('ID de habitación es requerido'),
  telefono: z.string().nullable().optional(),
  sexo: z.enum(['M', 'F'], { message: 'Sexo debe ser M o F' }),
  tipo: z.enum(['Staff', 'Participante'], { message: 'Tipo debe ser Staff o Participante' }),
  correo: z.email('Correo inválido').nullish(),
  talla: z.string().nullable().optional(),
  nom_c1: z.string().nullable().optional(),
  telef_c1: z.string().nullable().optional(),
  grupo_sang: z.string().nullable().optional(),
  miembro: z.enum(['Si', 'No']).nullable().optional(),
  enf_cronica: z.string().nullable().optional(),
  trat_med: z.string().nullable().optional(),
  seguro: z.string().nullable().optional(),
  alergia_med: z.string().nullable().optional(),
});

export type DatosImportDto = z.infer<typeof DatosImportSchema>;

// Esquema para el body del POST (array de datos)
export const ImportBulkDataSchema = z.object({
  datos: z.array(DatosImportSchema).min(1, 'Debe haber al menos un registro'),
});

export type ImportBulkDataDto = z.infer<typeof ImportBulkDataSchema>;
