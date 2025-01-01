import { createContext, useContext } from 'react';
import { GroupTyped } from './../../components/home/hook';

export type initEnvironmentState = {
  groups: GroupTyped[];
  notifications: string[];
  availableUsers: string[];
  warning: string;
  onlineUsers: number;
};

export const initEnvironment: initEnvironmentState = {
  groups: [],
  notifications: [],
  availableUsers: [],
  warning: '',
  onlineUsers: 1,
};

export type ValueProvider = {
  state: initEnvironmentState;
  environmentSocket: WebSocket;
  cleanWarning: () => void;
};

export const environmentContext = createContext<ValueProvider | null>(null);

const useEnvironmentContext = () => {
  const context = useContext(environmentContext);

  if (!context) {
    throw new Error(
      'useEnvironmentContext must be used inside EnvironmentContextProvider.',
    );
  }

  return context;
};

export default useEnvironmentContext;
