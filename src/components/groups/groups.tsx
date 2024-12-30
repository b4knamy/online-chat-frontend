import { Dispatch, SetStateAction, useState } from 'react';
import Group from './group/group';
import { Container } from './groups.style';
import CreateGroup from './create/create';
import { GroupTyped } from '../home/hook';

type props = {
  setCurrentRoom: Dispatch<SetStateAction<string>>;
  currentRoom: string;
  groups: GroupTyped[];
  environmentSocket: WebSocket | null;
};

export default function Groups({
  setCurrentRoom,
  currentRoom,
  groups,
  environmentSocket,
}: props) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Container>
      {groups.map((group) => {
        return (
          <Group
            key={group.id}
            name={group.name}
            setCurrentRoom={setCurrentRoom}
            currentRoom={currentRoom}
          />
        );
      })}
      <button onClick={() => setOpenForm(true)}>More</button>

      {openForm && (
        <CreateGroup
          setOpenForm={setOpenForm}
          environmentSocket={environmentSocket}
        />
      )}
    </Container>
  );
}
