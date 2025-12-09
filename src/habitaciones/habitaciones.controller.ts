import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HabitacionDto, HabitacionDtoSchema } from './dto/habitacion.dto';
import { z } from 'zod';

@Controller('habitaciones')
export class HabitacionesController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHabitaciones(): Promise<HabitacionDto[]> {
    const habitaciones = await this.prismaService.getHabitacionesConOcupantes();

    // Validar con Zod
    const habitacionesArray = z.array(HabitacionDtoSchema);
    return habitacionesArray.parse(habitaciones);
  }
}
