import { Container } from './room.style';
import Form from './form/form';
import Chat from './chat/chat';
import { useEffect, useState } from 'react';
import { MessageTyped } from '../home/hook';
import ChatDetails from './details/details';

type props = {
  isCurrentRoom: boolean;
  name: string;
  room_messages: MessageTyped[];
  currentUser: string;
  roomOwner: string;
  environmentSocket: WebSocket | null;
};

type chatMessageEvent = {
  type: 'chat.message';
  data: {
    message: MessageTyped;
  };
};

export default function Room({
  isCurrentRoom,
  name,
  room_messages,
  currentUser,
  roomOwner,
  environmentSocket,
}: props) {
  const [chatSocket, setChatSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<MessageTyped[]>(room_messages);

  useEffect(() => {
    const webSocketUrl = `ws://127.0.0.1:8000/ws/chat/${name}/?username=${currentUser}`;

    const chatSocket = new WebSocket(webSocketUrl);

    chatSocket.onmessage = (event) => {
      const event_data: chatMessageEvent = JSON.parse(event.data);
      if (event_data.type === 'chat.message') {
        setMessages((prev) => {
          const updatedMessages = [...prev];
          updatedMessages.push(event_data.data.message);
          return updatedMessages;
        });
      }
    };

    chatSocket.onclose = () => {
      console.log('websocket is now closed.');
    };

    setChatSocket(chatSocket);
    // alert('Your room is now ' + currentRoom);

    return () => {
      chatSocket.close();
      setMessages([]);
    };
  }, [name]);
  return (
    <Container $isCurrentRoom={isCurrentRoom}>
      <ChatDetails
        roomOwner={roomOwner}
        environmentSocket={environmentSocket}
        name={name}
        isRoomOwner={roomOwner === currentUser}
      />
      <Chat messages={messages} currentUser={currentUser} />
      <Form chatSocket={chatSocket} room={name} />
    </Container>
  );
}
