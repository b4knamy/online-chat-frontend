import Room from '../room/room';
import Details from '../details/details';
import Groups from '../groups/groups';
import { Content, HomeContainer } from './index.style';
import useHomeHook, { GroupTyped } from './hook';
import { memo, useState } from 'react';
import User from '../user/user';
import Warning from '../groups/warning/warning';

export default function Home() {
  const {
    groups,
    environmentSocket,
    availableUsers,
    currentUser,
    setCurrentUser,
    onlineUsers,
    warning,
    setWarning,
  } = useHomeHook();
  return (
    <HomeContainer>
      {warning && <Warning setWarning={setWarning} warning={warning} />}
      {currentUser ? (
        <>
          <Details
            onlineUsers={onlineUsers}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            environmentSocket={environmentSocket}
          />
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

const HomeContent = memo(
  ({ groups, environmentSocket, currentUser }: props) => {
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
              environmentSocket={environmentSocket}
              roomOwner={group.admin.username}
              currentUser={currentUser}
              isCurrentRoom={currentRoom === group.name}
              room_messages={group.room_messages}
            />
          );
        })}
      </Content>
    );
  },
);
