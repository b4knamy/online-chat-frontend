import styled from 'styled-components';
import { FlexCC } from '../../settings/styles/utils';

export const Container = styled.div`
  width: 250px;
  height: auto;
  ${FlexCC}
  flex-direction: column;
  gap: 30px;
  color: black;
  position: absolute;
  left: -250px;

  .notification-container {
    width: 100%;
    height: 100px;
    background-color: #fff;
    ${FlexCC}

    position: relative;

    i {
      position: absolute;
      /* transform: scale(1); */
      right: 0;
      margin-right: 10px;
      top: 0;
      margin-top: 10px;
    }
  }
`;
