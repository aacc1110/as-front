import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { NavLink } from 'react-router-dom';

const MenuBlock = styled.div`
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  color: ${palette.gray8};
  text-decoration: none;
  height: 48px;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.125rem;
  border-left: 3px solid transparent;
  transition: 0.125s all ease-in;
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  &.active {
    background: ${palette.blue0};
    border-color: ${palette.blue6};
    color: ${palette.blue6};
    font-weight: bold;
  }
`;

interface MenuProps {}

const Menu: React.FC<MenuProps> = props => {
  return (
    <MenuBlock>
      <MenuItem to="/trending" activeClassName="active">
        trending
      </MenuItem>
      <MenuItem to="/subscript" activeClassName="active">
        subscript
      </MenuItem>
      <MenuItem to="/resent" activeClassName="active">
        resent
      </MenuItem>
    </MenuBlock>
  );
};

export default Menu;
