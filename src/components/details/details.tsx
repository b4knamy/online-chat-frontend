import { Dispatch, SetStateAction } from 'react';
import { Container } from './details.style';

type props = {
  onlineUsers: number;
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
  environmentSocket: WebSocket | null;
};

export default function Details({
  onlineUsers,
  currentUser,
  setCurrentUser,
  environmentSocket,
}: props) {
  const logoutUser = async () => {
    const context = {
      type: 'logout.user',
    };
    environmentSocket?.send(JSON.stringify(context));
    setCurrentUser('');
  };

  return (
    <Container>
      <div className="available-users">
        Há {onlineUsers} tecladores online :)
      </div>
      <div className="current-user">
        <span>
          you are logged as <strong>{currentUser}</strong>.
        </span>
        <i
          className="fa-solid fa-right-from-bracket"
          onClick={() => logoutUser()}
        ></i>
      </div>
    </Container>
  );
}
