import { useEffect } from 'react';
import { Container } from './notifications.style';
import { Notification as NotifictionTyped } from '../../context/environment/actions';

type props = {
  notifications: NotifictionTyped[];
  removeNotification: (payload: string) => void;
};

export default function Notifications({
  notifications,
  removeNotification,
}: props) {
  console.log(notifications);
  return (
    <Container>
      {notifications.map((text) => {
        return (
          <Notification
            message={text}
            removeNotification={removeNotification}
          />
        );
      })}
    </Container>
  );
}

type notificationProps = {
  message: NotifictionTyped;
  removeNotification: (payload: string) => void;
};
const Notification = ({ message, removeNotification }: notificationProps) => {
  const { text, id, timestamp } = message;
  useEffect(() => {
    const now = Date.now();
    const elapsed = now - timestamp;
    const remainingTime = Math.max(6000 - elapsed, 0);

    const timeout = setTimeout(() => {
      removeNotification(id);
    }, remainingTime);

    return () => clearTimeout(timeout);
  }, [id, timestamp, removeNotification]);

  return (
    <div key={id} className="notification-container">
      <i
        className="fa-solid fa-xmark"
        onClick={() => removeNotification(id)}
      ></i>
      <span>{text}</span>
    </div>
  );
};
