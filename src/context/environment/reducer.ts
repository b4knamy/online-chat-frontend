import { webSocketData } from './actions';
import { initEnvironmentState } from './context';

const environmentReducer = (
  state: initEnvironmentState,
  actions: webSocketData,
): initEnvironmentState => {
  switch (actions.event_type) {
    case 'available.users': {
      state.onlineUsers = actions.context.online_users;
      state.availableUsers = actions.context.available_users;
      return { ...state };
    }
    case 'notify.user': {
      return { ...state };
    }

    case 'room.created': {
      const updatedGroups = [...state.groups];
      updatedGroups.push(actions.context);
      state.groups = updatedGroups;
      return { ...state };
    }

    case 'remove.room': {
      const updatedGroups = state.groups.filter(
        (group) => group.name !== actions.context.room,
      );
      state.groups = updatedGroups;
      return { ...state };
    }

    case 'room.failed': {
      state.warning = actions.context.message;
      return { ...state };
    }
    case 'initial.groups': {
      state.groups = actions.context;
      return { ...state };
    }
    case 'cleanWarning': {
      state.warning = '';
      return { ...state };
    }
  }
};

export default environmentReducer;
