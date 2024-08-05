import styled from 'styled-components';
import { colors } from '@theme/colors';

export const ButtonBase = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &.button--primary {
    background-color: ${colors.primary};
  }

  &.button--secondary {
    background-color: ${colors.secondary};
  }

  &.button--large {
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
  }

  &.button--small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
`;