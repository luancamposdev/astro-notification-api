import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from '@application/use-cases/read-notification';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found';

describe('Read notifications', () => {
  it('should be able to read notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    await expect(() => {
      return readNotification.execute({
        notificationId: 'example-id-notification',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
