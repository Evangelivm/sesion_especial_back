import { Module } from '@nestjs/common';
import { PermutaController } from './permuta.controller';
import { PermutaService } from './permuta.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PermutaController],
  providers: [PermutaService],
})
export class PermutaModule {}
