import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../static/svg';
import Button from '../../styles/Button';
import { NavLink } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  .wrapper {
    border: 1px solid black;
    height: 3rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      border: 1px solid black;
      display: flex;
      width: 700px;
      margin: 0 left;
      padding-left: 1rem;
    }
  }
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  return (
    <HeaderBlock>
      <div className="wrapper">
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="search">search</div>
        <div className="sign">
          <Button size="DEFAULT" color="blue">
            로그인
          </Button>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
