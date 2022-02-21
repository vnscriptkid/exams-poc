import { Module } from '@nestjs/common';
import { RoomBookingsController } from './room-bookings.controller';
import { RoomBookingsService } from './room-bookings.service';

@Module({
  controllers: [RoomBookingsController],
  providers: [RoomBookingsService]
})
export class RoomBookingsModule {}
