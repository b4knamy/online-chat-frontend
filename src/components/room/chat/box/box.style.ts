import styled, { css } from 'styled-components';
import { FlexCC } from '../../../../settings/styles/utils';
type props = {
  $isCurrentUser: boolean;
};

export const Container = styled.div<props>`
  ${({ $isCurrentUser }) => css`
    width: 100%;
    height: auto;
    position: relative;

    .chat-container {
      width: auto;
      min-width: 250px;
      max-width: 80%;
      height: auto;
      color: white;
      display: flex;
      align-items: start;
      justify-content: start;
      position: relative;
      flex-direction: ${$isCurrentUser ? 'row-reverse' : 'row'};
      float: ${$isCurrentUser ? 'right' : 'left'};
      gap: 20px;
    }

    .chat-profile {
      width: 50px;
      min-width: 50px;
      height: 50px;
      border-radius: 50%;
      ${FlexCC}
      color: black;
      background-color: #fff;
    }

    .chat-text {
      width: auto;
      min-width: 150px;
      height: auto;
      min-height: 50px;
      ${FlexCC}
      padding: 5px 10px;
      word-break: break-all;
      color: white;

      border-radius: 10px;
    }
  `}
`;
