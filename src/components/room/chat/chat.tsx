import { MessageTyped } from '../../home/hook';
import ChatBox from './box/box';
import { Container } from './chat.style';

type props = {
  messages: MessageTyped[];
};

export default function Chat({ messages }: props) {
  return (
    <Container>
      {messages.map((message) => {
        return (
          <ChatBox
            key={message.id}
            isCurrentUser={true}
            text={message.text}
            username={message.user.username}
          />
        );
      })}
    </Container>
  );
}
