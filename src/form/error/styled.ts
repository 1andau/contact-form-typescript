import styled from 'styled-components';



export const Error = styled.div.attrs(() => ({
    className: 'input-error'
  }))`

  color: red;
  font-size: 15px;
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;
`;