import styled from 'styled-components';
import { FlexCC } from '../../settings/styles/utils';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  ${({ theme }) => ({
    backgroundColor: theme.color.rgb.primaryWhite,
    color: theme.color.rgb.primaryBlack,
  })};
  position: relative;

  .available-users {
    width: max-content;
    height: 100%;
    position: absolute;
    margin-left: 10px;
    left: 0;
    ${FlexCC}
    flex-direction: row;
    gap: 5px;

    .green-circle {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: green;
    }
  }
  .current-user {
    ${FlexCC};
    position: absolute;
    right: 0;
    margin-right: 10px;
    width: max-content;
    height: 100%;

    gap: 30px;

    i {
      transform: scale(1.5);
      cursor: pointer;

      &:hover {
        color: darkcyan;
      }
    }
    padding-right: 10px;
  }
`;
