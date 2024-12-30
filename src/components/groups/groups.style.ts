import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0px 0px 50px 0px;
  border-top: 1px solid black;
  width: 150px;
  height: 100%;
  ${({ theme }) => ({ backgroundColor: theme.color.rgb.primaryWhite })}

  button {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;
