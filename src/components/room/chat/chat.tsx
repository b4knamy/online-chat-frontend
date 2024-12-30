import { MessageTyped } from '../../home/hook';
import ChatBox from './box/box';
import { Container } from './chat.style';

type props = {
  messages: MessageTyped[];
  currentUser: string;
};

export default function Chat({ messages, currentUser }: props) {
  return (
    <Container>
      {messages.map((message) => {
        return (
          <ChatBox
            key={message.id}
            isCurrentUser={message.user.username === currentUser}
            text={message.text}
            username={message.user.username}
          />
        );
      })}
    </Container>
  );
}
