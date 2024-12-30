import { useEffect, useState } from 'react';

export default function useHomeHook() {
  const [groups, setGroups] = useState<GroupTyped[]>([]);
  const [environmentSocket, setEnvironmentSocket] = useState<WebSocket | null>(
    null,
  );
  const [currentUser, setCurrentUser] = useState<string>('');
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const [warning, setWarning] = useState<string>('');

  const [availableUsers, setAvailableUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/rooms');

      if (response.ok) {
        const data: GroupTyped[] = await response.json();
        setGroups(data);
      }
    };

    fetchGroups();
  }, []);

  useEffect(() => {
    const websocketUrl = 'http://127.0.0.1:8000/ws/environment';

    const environmentWebSocket = new WebSocket(websocketUrl);

    environmentWebSocket.onmessage = (event) => {
      const event_data: webSocketData = JSON.parse(event.data);
      if (event_data.type === 'room.created') {
        setGroups((prev) => {
          const updatedGroups = [...prev];
          updatedGroups.push(event_data.data.room);
          return updatedGroups;
        });
      } else if (event_data.type === 'available.users') {
        setAvailableUsers(event_data.data.available_users);
        setOnlineUsers(event_data.data.online_users);
      } else if (event_data.type === 'room.failed') {
        setWarning(event_data.data.message);
      }
    };
    environmentWebSocket.onclose = () => {
      console.log('room socket is closed.');
    };

    setEnvironmentSocket(environmentWebSocket);

    return () => environmentWebSocket.close();
  }, []);

  return {
    groups,
    environmentSocket,
    availableUsers,
    currentUser,
    setCurrentUser,
    onlineUsers,
    setWarning,
    warning,
  };
}

type webSocketData = roomEvent | availableUsersEvent | roomFailCreationEvent;

type availableUsersEvent = {
  type: 'available.users';
  data: {
    available_users: string[];
    online_users: number;
  };
};

type roomEvent = {
  type: 'room.created';
  data: {
    room: GroupTyped;
  };
};

type roomFailCreationEvent = {
  type: 'room.failed';
  data: {
    message: string;
  };
};

export type UserTyped = {
  has_room: boolean;
  id: number;
  username: string;
};

export type MessageTyped = {
  id: number;
  user: UserTyped;
  text: string;
  created_at: string;
};

export type GroupTyped = {
  admin: UserTyped;
  id: number;
  name: string;
  room_messages: MessageTyped[];
};
