import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SaludService } from './salud.service';

@Controller('salud')
export class SaludController {
  constructor(private readonly saludService: SaludService) {}

  @Get()
  async findAll() {
    try {
      console.log('🔍 Iniciando consulta GET /salud...');
      const result = await this.saludService.findAll();
      console.log('✅ Consulta exitosa, registros:', result.length);
      return result;
    } catch (error) {
      console.error('❌ Error en GET /salud:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
      throw error;
    }
  }

  @Get('inv')
  getInventario() {
    return this.saludService.getInventario();
  }

  @Post('inv')
  createInventarioItem(@Body() data: any) {
    return this.saludService.createInventarioItem(data);
  }

  @Put('inv/:id')
  updateInventarioItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.saludService.updateInventarioItem(id, data);
  }

  @Patch('inv/decrease-stock/:id')
  decreaseStock(
    @Param('id', ParseIntPipe) id: number,
    @Body('amount', ParseIntPipe) amount: number,
  ) {
    return this.saludService.decreaseStock(id, amount);
  }

  @Delete('inv/:id')
  deleteInventarioItem(@Param('id', ParseIntPipe) id: number) {
    return this.saludService.deleteInventarioItem(id);
  }

  @Post('atencion')
  createAtencion(@Body() data: any) {
    return this.saludService.createAtencion(data);
  }

  @Get('atencion')
  async getAllAtencionDetails() {
    try {
      return await this.saludService.getAllAtencionDetails();
    } catch (error) {
      console.error('Error al obtener detalles de atenciones:', error);
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al obtener el historial de atenciones',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('atencion/part/:idDatos')
  getAtencionDetailsByDatosId(@Param('idDatos', ParseIntPipe) idDatos: number) {
    return this.saludService.getAtencionDetailsByDatosId(idDatos);
  }

  @Get('atencion/:idSalud')
  getAtencionDetails(@Param('idSalud', ParseIntPipe) idSalud: number) {
    return this.saludService.getAtencionDetails(idSalud);
  }
}
