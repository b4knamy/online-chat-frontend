import styled from 'styled-components';
import { FlexCC } from '../../../settings/styles/utils';

type props = {
  $isCurrentRoom: boolean;
};

export const Container = styled.div<props>`
  width: 100%;
  height: 40px;
  ${({ $isCurrentRoom }) =>
    $isCurrentRoom
      ? { backgroundColor: 'black', color: 'white' }
      : { backgroundColor: 'white', color: 'black' }}
  ${FlexCC}
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: all 300ms linear;
  }
`;
