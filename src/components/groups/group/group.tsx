import { Dispatch, SetStateAction } from 'react';
import { Container } from './group.style';

type props = {
  name: string;
  setCurrentRoom: Dispatch<SetStateAction<string>>;
  currentRoom: string;
};
export default function Group({ name, setCurrentRoom, currentRoom }: props) {
  return (
    <Container
      onClick={() => setCurrentRoom(name)}
      $isCurrentRoom={currentRoom === name}
    >
      <span>{name}</span>
    </Container>
  );
}
