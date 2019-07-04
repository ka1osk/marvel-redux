import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
  height: 60px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: 0;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .1);
  }
`;

export const AppName = styled.div`
  display: flex;
  padding: 10px;
  flex: 1;
  width: 200px;
  height: 60px;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
`;