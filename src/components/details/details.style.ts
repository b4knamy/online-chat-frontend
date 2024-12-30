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
`;

export const CurrentUser = styled.div`
  ${FlexCC};
  position: absolute;
  right: 0;
  margin-right: 10px;
  width: max-content;
  height: 100%;
`;

export const AvailableUsers = styled.div`
  width: max-content;
  height: 100%;
  position: absolute;
  margin-left: 10px;
  left: 0;
  ${FlexCC}
`;
