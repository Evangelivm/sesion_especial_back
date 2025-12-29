import { Module } from '@nestjs/common';
import { PartController } from './part.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [PartController],
})
export class PartModule {}
