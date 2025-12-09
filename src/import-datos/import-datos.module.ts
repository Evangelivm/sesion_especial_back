import { Module } from '@nestjs/common';
import { ImportDatosController } from './import-datos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ImportDatosController],
})
export class ImportDatosModule {}
