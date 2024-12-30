import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Container } from './create.style';

type props = {
  setOpenForm: Dispatch<SetStateAction<boolean>>;
  environmentSocket: WebSocket | null;
};

export default function CreateGroup({ setOpenForm, environmentSocket }: props) {
  const [value, setValue] = useState('');

  const onSubmitHandler = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const context = {
        type: 'room.created',
        data: {
          new_room: value,
        },
      };
      environmentSocket?.send(JSON.stringify(context));
    } finally {
      setOpenForm(false);
    }
  };
  return (
    <Container>
      <form>
        <label htmlFor="create-room">
          Criar sala (maximo 3 salas por usuário)
        </label>
        <input
          type="text"
          id="create-room"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={onSubmitHandler}>
          Criar sala
        </button>
      </form>
    </Container>
  );
}
