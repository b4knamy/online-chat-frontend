import { Container } from './box.style';

type props = {
  isCurrentUser: boolean;
  text: string;
  username: string;
};

export default function ChatBox({ isCurrentUser, text, username }: props) {
  return (
    <Container $isCurrentUser={isCurrentUser}>
      <div className="chat-container">
        <div className="chat-profile">
          <h1>{username}</h1>
        </div>
        <div className="chat-text">
          <p>{text}</p>
        </div>
      </div>
    </Container>
  );
}
