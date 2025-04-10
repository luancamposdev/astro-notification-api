import { IsUUID, IsNotEmpty, Length } from 'class-validator';

export class NotificationDto {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsNotEmpty()
  @Length(2, 16)
  category: string;
}
