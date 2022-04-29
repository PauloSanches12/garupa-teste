import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 15px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #34CB79;
  margin-top: 15px;
  margin-bottom: 8px;
  border-radius: 7px;

  &:hover {
    background-color: #1eba65;
  }
`;

export const LabelButton = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
`
