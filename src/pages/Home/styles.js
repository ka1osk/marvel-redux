import styled, { createGlobalStyle } from 'styled-components';

export const PopoverContainer = styled.div`
  background-color: #0984e3;
  border: 1px solid #ddd;
  border-radius: 4px;  
  overflow: hidden;
  transition: 300ms;
  white-space: nowrap;
  display: flex;
  user-select: none;
  position: relative;
`;

export const PopoverButton = styled.div`
  color: #fff;
  background-color: #0984e3;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  span {
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const PopoverClass = createGlobalStyle`
  .popoverSelection {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    border-radius: 4px;
  }
  .popoverSelection:after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #0984e3;
  }
`;