import styled from 'styled-components';
import { FlexCC } from '../../../settings/styles/utils';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);

  ${FlexCC}

  form {
    width: 200px;
    height: 150px;

    ${FlexCC}
    flex-direction: column;
    gap: 20px;

    input {
      width: 80%;
      height: 40px;
    }
    label {
      font-size: 15px;
      color: white;
    }

    button {
      width: 100%;
      position: relative;
    }
  }
`;
