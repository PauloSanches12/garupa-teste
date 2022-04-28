import { ReactNode } from 'react';

import { ButtonContainer, LabelButton } from './styles';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <ButtonContainer>
      <LabelButton>{children}</LabelButton>
    </ButtonContainer>
  );
};

export default Button;
