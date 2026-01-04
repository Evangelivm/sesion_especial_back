import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Get,
} from '@nestjs/common';
import { PermutaService } from './permuta.service';
import {
  IntercambioParticipantesDtoSchema,
  IntercambioParticipantesDto,
  CambioCompaniaDtoSchema,
  CambioCompaniaDto,
  CambioCompuestoDtoSchema,
  CambioCompuestoDto,
  CompaniaDto,
} from './dto/permuta.dto';

@Controller('permuta')
export class PermutaController {
  constructor(private readonly permutaService: PermutaService) {}

  /**
   * Endpoint para intercambiar dos participantes entre compañías
   * POST /permuta/intercambio
   */
  @Post('intercambio')
  async intercambiarParticipantes(
    @Body() body: IntercambioParticipantesDto,
  ) {
    try {
      // Validar con Zod
      const validatedData = IntercambioParticipantesDtoSchema.parse(body);
      const { persona1_id, persona2_id } = validatedData;

      const resultado = await this.permutaService.intercambiarParticipantes(
        persona1_id,
        persona2_id,
      );

      return resultado;
    } catch (error) {
      console.error('Error en intercambio:', error);

      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        error.message || 'Error al realizar el intercambio',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Endpoint para cambiar un participante de compañía
   * POST /permuta/cambio
   */
  @Post('cambio')
  async cambiarCompania(@Body() body: CambioCompaniaDto) {
    try {
      // Validar con Zod
      const validatedData = CambioCompaniaDtoSchema.parse(body);
      const { persona_id, nueva_compania_id } = validatedData;

      const resultado = await this.permutaService.cambiarCompania(
        persona_id,
        nueva_compania_id,
      );

      return resultado;
    } catch (error) {
      console.error('Error en cambio de compañía:', error);

      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        error.message || 'Error al cambiar de compañía',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Endpoint opcional para obtener historial de permutas
   * GET /permuta/historial
   */
  @Get('historial')
  async obtenerHistorial() {
    return this.permutaService.obtenerHistorial();
  }

  /**
   * Endpoint para cambio compuesto (compañía y habitación)
   * POST /permuta/cambio-compuesto
   */
  @Post('cambio-compuesto')
  async cambioCompuesto(@Body() body: CambioCompuestoDto) {
    try {
      // Validar con Zod
      const validatedData = CambioCompuestoDtoSchema.parse(body);
      const { persona_id, nueva_compania_id, nueva_habitacion_id } =
        validatedData;

      const resultado = await this.permutaService.cambioCompuesto(
        persona_id,
        nueva_compania_id,
        nueva_habitacion_id,
      );

      return resultado;
    } catch (error) {
      console.error('Error en cambio compuesto:', error);

      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        error.message || 'Error al realizar el cambio compuesto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Endpoint para obtener todas las compañías disponibles
   * GET /permuta/companias
   */
  @Get('companias')
  async obtenerCompanias(): Promise<CompaniaDto[]> {
    return this.permutaService.obtenerCompanias();
  }
}
