import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/data.module';
import { UsersModule } from './user/user.module';
import { TrackingModule } from './tracking/tracking.module';

@Module({
  imports: [DatabaseModule, UsersModule, TrackingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
