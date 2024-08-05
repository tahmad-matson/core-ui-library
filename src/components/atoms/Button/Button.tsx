import React from 'react';
import { ButtonBase } from './Button.styled';
import { ButtonProps } from './Button.types';


const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', ...props }) => {
  const className = `button button--${variant} button--${size}`;
  return (
    <ButtonBase className={className} {...props}>
      {children}
    </ButtonBase>
  );
};

export default Button;