import styled from 'styled-components';

type props = {
  $isCurrentRoom: boolean;
};

export const Container = styled.section<props>`
  width: calc(100% - 100px);
  height: 100%;
  padding-bottom: 60px;
  position: relative;
  display: ${({ $isCurrentRoom }) => ($isCurrentRoom ? 'flex' : 'none')};
  flex-direction: column;
  gap: 30px;
`;
