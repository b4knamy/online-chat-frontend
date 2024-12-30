import { AvailableUsers, Container, CurrentUser } from './details.style';

type props = {
  onlineUsers: number;
  currentUser: string;
};

export default function Details({ onlineUsers, currentUser }: props) {
  return (
    <Container>
      <AvailableUsers>Há {onlineUsers} tecladores online :)</AvailableUsers>
      <CurrentUser>
        <span>
          you are logged as <strong>{currentUser}</strong>.
        </span>
      </CurrentUser>
    </Container>
  );
}
