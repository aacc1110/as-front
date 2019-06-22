import React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from './palette';

type ColorType = 'blue' | 'gray' | 'darkGray' | 'lightGray';
type SizeType = 'SMALL' | 'DEFAULT' | 'LARGE' | 'BIG';

interface ButtonProps {
  inline?: boolean;
  color: ColorType;
  size: SizeType;
  border?: boolean;
}

const ButtonBlock = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background: ${props => buttonColorMap[props.color].background};
  color: ${props => buttonColorMap[props.color].color};
  &:hover,
  &:focus {
    background: ${props => buttonColorMap[props.color].hoverBackground};
  }
  border-radius: 4px;
  padding-top: 0;
  padding-bottom: 0;
  ${props =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}

  ${props =>
    props.size === 'SMALL' &&
    css`
      height: 1.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      font-size: 0.6rem;
      border-radius: 0.3rem;
    `};
  ${props =>
    props.size === 'DEFAULT' &&
    css`
      height: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 0.85rem;
      border-radius: 0.4rem;
    `};
  ${props =>
    props.size === 'LARGE' &&
    css`
      height: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
      border-radius: 0.75rem;
    `};

  ${props =>
    props.size === 'BIG' &&
    css`
      height: 3rem;
      font-size: 1.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-radius: 1.5rem;
    `}
`;

const Button: React.FC<ButtonProps> = ({ color, size, children }) => {
  return (
    <ButtonBlock color={color} size={size}>
      {children}
    </ButtonBlock>
  );
};

export default Button;
