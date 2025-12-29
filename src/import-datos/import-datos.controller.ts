import {
  Controller,
  Post,
  Body,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImportBulkDataSchema, ImportBulkDataDto } from './import-datos.dto';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import { normalizeFullName } from 'src/common/utils/name-formatter.util';

@Controller('import-datos')
export class ImportDatosController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('bulk')
  @HttpCode(HttpStatus.CREATED)
  async importBulkData(@Body() body: any) {
    try {
      // Validar el body completo con Zod
      const validatedData: ImportBulkDataDto =
        ImportBulkDataSchema.parse(body);

      // Realizar la importación en una transacción serializable
      const result = await this.prismaService.$transaction(
        async (prisma) => {
          // Preparar los datos para inserción y normalizar nombres
          const dataToInsert = validatedData.datos.map((dato) => {
            const normalized = normalizeFullName(dato.nombre, dato.apellido);
            return {
              nombre: normalized.firstName,
              apellido: normalized.lastName,
              edad: dato.edad,
              nacimiento: dato.nacimiento ? new Date(dato.nacimiento) : null,
              id_sesion: dato.id_sesion,
              id_estaca: dato.id_estaca,
              id_barrio: dato.id_barrio,
              id_comp: dato.id_comp,
              id_habitacion: dato.id_habitacion,
              telefono: dato.telefono || null,
              sexo: dato.sexo,
              tipo: dato.tipo,
              correo: dato.correo || null,
              talla: dato.talla || null,
              nom_c1: dato.nom_c1 || null,
              telef_c1: dato.telef_c1 || null,
              grupo_sang: dato.grupo_sang || null,
              miembro: dato.miembro || null,
              enf_cronica: dato.enf_cronica || null,
              trat_med: dato.trat_med || null,
              seguro: dato.seguro || null,
              alergia_med: dato.alergia_med || null,
            };
          });

          // Insertar todos los datos
          const createResult = await prisma.datos.createMany({
            data: dataToInsert,
            skipDuplicates: false, // No permitir duplicados para mantener integridad
          });

          return createResult;
        },
        {
          isolationLevel: 'Serializable',
          maxWait: 5000, // Esperar máximo 5 segundos para obtener el lock
          timeout: 10000, // Timeout de 10 segundos para la transacción
        },
      );

      return {
        success: true,
        message: `Se importaron ${result.count} registros exitosamente`,
        count: result.count,
      };
    } catch (error: any) {
      // Manejar errores de validación de Zod
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        }));

        throw new BadRequestException({
          success: false,
          message: 'Error de validación de datos',
          errors: formattedErrors,
        });
      }

      // Manejar errores de Prisma (constraints, foreign keys, etc)
      if (error.code) {
        let message = 'Error al insertar datos en la base de datos';

        switch (error.code) {
          case 'P2002':
            message = 'Registro duplicado encontrado';
            break;
          case 'P2003':
            message =
              'Error de referencia: Verifica que los IDs de sesión, estaca, barrio, comp y habitación existan';
            break;
          case 'P2025':
            message = 'Registro no encontrado';
            break;
        }

        throw new BadRequestException({
          success: false,
          message,
          code: error.code,
        });
      }

      // Error genérico
      throw new BadRequestException({
        success: false,
        message: error.message || 'Error al importar datos',
      });
    }
  }
}
