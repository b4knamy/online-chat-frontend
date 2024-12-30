import Room from '../room/room';
import Details from '../details/details';
import Groups from '../groups/groups';
import { Content, HomeContainer } from './index.style';
import useHomeHook, { GroupTyped } from './hook';
import { memo, useState } from 'react';
import User from '../user/user';

export default function Home() {
  const {
    groups,
    environmentSocket,
    availableUsers,
    currentUser,
    setCurrentUser,
    onlineUsers,
  } = useHomeHook();
  return (
    <HomeContainer>
      {currentUser ? (
        <>
          <Details onlineUsers={onlineUsers} currentUser={currentUser} />
          <HomeContent
            groups={groups}
            environmentSocket={environmentSocket}
            currentUser={currentUser}
          />
        </>
      ) : (
        <User
          setCurrentUser={setCurrentUser}
          availableUsers={availableUsers}
          environmentSocket={environmentSocket}
        />
      )}
    </HomeContainer>
  );
}

type props = {
  groups: GroupTyped[];
  environmentSocket: WebSocket | null;
  currentUser: string;
};

const HomeContent = memo(({ groups, environmentSocket }: props) => {
  const [currentRoom, setCurrentRoom] = useState('lobby');

  return (
    <Content>
      <Groups
        setCurrentRoom={setCurrentRoom}
        currentRoom={currentRoom}
        groups={groups}
        environmentSocket={environmentSocket}
      />
      {groups.map((group) => {
        return (
          <Room
            key={group.id}
            name={group.name}
            isCurrentRoom={currentRoom === group.name}
            room_messages={group.room_messages}
          />
        );
      })}
    </Content>
  );
});
