import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WsModule } from './ws/ws.module';
import { PartController } from './part/part.controller';
import { PartModule } from './part/part.module';
import { RedisService } from './redis/redis.service';
import { EstacaController } from './estaca/estaca.controller';
import { StatsController } from './stats/stats.controller';
import { HabitacionesController } from './habitaciones/habitaciones.controller';
import { SaludModule } from './salud/salud.module';
import { PermutaModule } from './permuta/permuta.module';
import { ConfigModule } from '@nestjs/config';
import { ImportDatosModule } from './import-datos/import-datos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    WsModule,
    PartModule,
    SaludModule,
    PermutaModule,
    ImportDatosModule,
  ],
  controllers: [
    AppController,
    PartController,
    EstacaController,
    StatsController,
    HabitacionesController,
  ],
  providers: [AppService, RedisService],
})
export class AppModule {}
