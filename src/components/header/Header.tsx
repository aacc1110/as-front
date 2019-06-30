import React, { memo } from 'react';
import styled from 'styled-components';
import { Logo } from '../../static/svg';
import Button from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import palette from '../../styles/palette';
import Search from './Search';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${palette.gray8};
  .wrapper {
    border: 1px solid black;
    height: 3rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = memo(props => {
  return (
    <HeaderBlock>
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="sign">
          <Button size="DEFAULT" color="blue" to="auth">
            로그인
          </Button>
        </div>
      </div>
    </HeaderBlock>
  );
});

export default Header;
