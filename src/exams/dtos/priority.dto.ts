import { Expose, Transform } from 'class-transformer';

export class PriorityDto {
  @Expose()
  targetDate: Date;

  @Expose()
  requestIntervalId: number;

  @Expose()
  examSlotId: number;

  @Expose()
  roomId: number;

  @Expose()
  order: number;

  @Expose()
  comment: string;

  @Expose()
  exactStartTime: number;

  @Expose()
  exactEndTime: number;

  @Expose()
  strict_date: boolean;

  @Expose()
  strict_time: boolean;

  @Expose()
  @Transform(({ obj }) => obj?.exam?.id || obj?.examId || null)
  examId: number;
}
