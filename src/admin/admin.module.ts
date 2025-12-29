import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { RedisModule } from 'src/redis/redis.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [RedisModule, AuthModule],
  controllers: [AdminController],
})
export class AdminModule {}
