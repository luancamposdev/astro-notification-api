import { Body, Controller, Post } from '@nestjs/common';

import { NotificationDto } from '@infra/http/dtos/notification.dto';
import { SendNotification } from '@application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async createNotification(@Body() data: NotificationDto) {
    const { recipientId, content, category } = data;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
