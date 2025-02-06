import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingService } from './tracking.service';
import { TrackingController } from './tracking.controller';
import { TrackingGateway } from './tracking.gateway';
import { Tracking } from '../entities/tracking.entity';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tracking]), UsersModule],
  controllers: [TrackingController],
  providers: [TrackingService, TrackingGateway],
})
export class TrackingModule {}
