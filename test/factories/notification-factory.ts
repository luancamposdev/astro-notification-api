import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id2',
    content: new Content('Você recebeu uma nova mensagem de Marcelo'),
    category: 'social',
    ...override,
  });
}
