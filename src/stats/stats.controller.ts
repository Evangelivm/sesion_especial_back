import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParticipanteStatsDto } from './dto/participante-stats.dto';

@Controller('stats')
export class StatsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getStats(): Promise<ParticipanteStatsDto[]> {
    return await this.prismaService.getParticipantesOrdenados();
  }

  @Get(':id')
  async getStatsByCompany(@Param('id') id: string) {
    const newId = parseInt(id, 10) + 1;
    return await this.prismaService.getParticipantesByCompania(
      newId.toString(),
    );
  }
}
