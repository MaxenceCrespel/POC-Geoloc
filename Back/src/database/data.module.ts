import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from 'src/entities/tracking.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://admin:adminpassword@localhost:27017/admin?authSource=admin',
      database: 'admin',
      useUnifiedTopology: true,
      entities: [User, Tracking],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
