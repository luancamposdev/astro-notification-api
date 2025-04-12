import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('CountRecipientNotifications', () => {
  it('should to be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient-id-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
