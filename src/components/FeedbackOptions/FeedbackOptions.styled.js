import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
