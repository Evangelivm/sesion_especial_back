import {
  Controller,
  Get,
  Put,
  Post,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RedisService } from 'src/redis/redis.service';
import { Response } from 'express';
import {
  CreateParticipanteDtoSchema,
  CreateParticipanteDto,
  ParticipanteBasicoDto,
} from './dto/part.dto';
import { normalizeFullName } from 'src/common/utils/name-formatter.util';

@Controller('part')
export class PartController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  @Get()
  async getParticipantes(): Promise<ParticipanteBasicoDto[]> {
    const participantes = await this.prismaService.getParticipantes();
    console.log('Controller - Primeros 3:', participantes.slice(0, 3));
    return participantes;
  }

  @Get('medical-info/all')
  async getAllParticipantesConInfoMedica(@Res() res: Response) {
    try {
      const participantes = await this.prismaService.getAllParticipantesConInfoMedica();
      return res.status(HttpStatus.OK).json(participantes);
    } catch (error) {
      console.error('Error al obtener participantes con info médica:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error al obtener participantes con info médica' });
    }
  }

  @Get(':id')
  async getParticipanteById(@Param('id') id: string, @Res() res: Response) {
    try {
      const participante = await this.prismaService.getParticipanteById(id);
      return res.status(HttpStatus.OK).json(participante);
    } catch (error) {
      if (error.message === 'Participante no encontrado') {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: error.message });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error al consultar el participante' });
    }
  }
  @Get('full/:id')
  async getFullParticipanteById(@Param('id') id: string, @Res() res: Response) {
    try {
      const participante = await this.prismaService.getFullParticipanteById(id);
      return res.status(HttpStatus.OK).json(participante);
    } catch (error) {
      if (error.message === 'Participante no encontrado') {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: error.message });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error al consultar el participante' });
    }
  }

  @Put(':id')
  async updateAsistencia(@Param('id') id: string) {
    const response = await this.prismaService.updateAsistencia(id);

    // Publicar resúmenes después del PUT
    console.log('Actualización realizada, publicando resúmenes...');
    await this.prismaService.publishSummariesByAges();
    await this.prismaService.publishRoomsByAgesAndGenre();
    await this.prismaService.publishParticipantesOrdenados(Number(id));
    await this.prismaService.publishDireccionStats();

    return response;
  }

  @Put(':id/medical-info')
  async updateMedicalInfo(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ) {
    try {
      const updated = await this.prismaService.updateMedicalInfo(
        Number(id),
        body,
      );
      return res.status(HttpStatus.OK).json(updated);
    } catch (error) {
      console.error('Error al actualizar información médica:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error al actualizar información médica' });
    }
  }

  @Post()
  async createParticipante(
    @Body() body: CreateParticipanteDto,
    @Res() res: Response,
  ) {
    try {
      // Verificar si las inscripciones están cerradas
      const inscripcionesCerradas = await this.redisService.get(
        'admin:inscripciones_cerradas',
      );

      if (inscripcionesCerradas === 'true') {
        // TODO: Verificar si el usuario es admin cuando BetterAuth esté implementado
        return res.status(HttpStatus.FORBIDDEN).json({
          message:
            'Las inscripciones están cerradas. Solo los administradores pueden registrar nuevos participantes.',
        });
      }

      // Validar con Zod
      const validatedData = CreateParticipanteDtoSchema.parse(body);

      // Normalizar nombre y apellido (trim + proper case)
      const normalized = normalizeFullName(
        validatedData.nombre,
        validatedData.apellido,
      );

      // Aplicar los valores normalizados
      const dataToSave = {
        ...validatedData,
        nombre: normalized.firstName,
        apellido: normalized.lastName,
      };

      const result = await this.prismaService.createParticipanteWithAsistencia(
        dataToSave,
      );
      // Publicar resúmenes después del POST
      console.log('Nuevo participante creado, publicando resúmenes...');
      await this.prismaService.publishSummariesByAges();
      await this.prismaService.publishRoomsByAgesAndGenre();
      await this.prismaService.publishParticipantesOrdenados(result.id);

      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      console.error('Error al crear participante:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error al crear participante y asistencia' });
    }
  }
}
