import { ExamSchedule } from './exam-schedules/entities/exam-schedule.entity';
import { RoomBooking } from './room-bookings/entities/room-booking.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsModule } from './exams/exams.module';
import { RoomBookingsModule } from './room-bookings/room-bookings.module';
import { ExamSchedulesModule } from './exam-schedules/exam-schedules.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Exam } from './exams/entities/exam.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3305,
      username: 'root',
      password: '123456',
      database: 'exams',
      synchronize: true,
      entities: [Exam, RoomBooking, ExamSchedule],
      namingStrategy: new SnakeNamingStrategy(),
      logging: true,
    }),
    ExamsModule,
    RoomBookingsModule,
    ExamSchedulesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
