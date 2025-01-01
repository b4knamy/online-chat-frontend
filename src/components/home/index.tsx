import Room from '../room/room';
import Details from '../details/details';
import Groups from '../groups/groups';
import { Content, HomeContainer } from './index.style';
import { GroupTyped } from './hook';
import { memo, useState } from 'react';
import User from '../user/user';
import Warning from '../groups/warning/warning';
import useEnvironmentContext from '../../context/environment/context';

export default function Home() {
  const [currentUser, setCurrentUser] = useState('');
  const { state, environmentSocket, cleanWarning } = useEnvironmentContext();
  console.log('how many times I run?');

  return (
    <HomeContainer>
      {state.warning && (
        <Warning warning={state.warning} cleanWarning={cleanWarning} />
      )}
      {currentUser ? (
        <>
          <Details
            onlineUsers={state.onlineUsers}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            environmentSocket={environmentSocket}
          />
          <HomeContent
            groups={state.groups}
            environmentSocket={environmentSocket}
            currentUser={currentUser}
          />
        </>
      ) : (
        <User
          setCurrentUser={setCurrentUser}
          availableUsers={state.availableUsers}
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
    console.log('rodei o HomeContent');
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
