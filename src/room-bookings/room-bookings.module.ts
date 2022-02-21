import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomBooking } from './entities/room-booking.entity';
import { RoomBookingsController } from './room-bookings.controller';
import { RoomBookingsService } from './room-bookings.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomBooking])],
  controllers: [RoomBookingsController],
  providers: [RoomBookingsService],
})
export class RoomBookingsModule {}
