import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 1000px;
  margin: 0 auto;
  position: relative;
  margin-top: 150px;
  height: 700px;
  background-color: ${({ theme }) => theme.color.rgba.primaryWhite};

  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
  /* overflow: hidden; */
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: row;
`;
