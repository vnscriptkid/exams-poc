import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePriorityDto {
  @IsString()
  targetDate: string;

  @IsNumber()
  requestIntervalId: number;

  @IsOptional()
  @IsNumber()
  examSlotId: number;

  @IsOptional()
  @IsNumber()
  roomId: number;

  @IsNumber()
  order: number;

  @IsOptional()
  @IsString()
  comment: string;

  @IsOptional()
  @IsNumber()
  exactStartTime: number;

  @IsOptional()
  @IsNumber()
  exactEndTime: number;

  @IsOptional()
  @IsBoolean()
  strictDate: boolean;

  @IsOptional()
  @IsBoolean()
  strictTime: boolean;
}
