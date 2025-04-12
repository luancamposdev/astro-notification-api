import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get recipient notifications', () => {
  it('should  be able to get notifications by recipient id', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
      ]),
    );
  });
});
