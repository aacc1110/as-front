import React, { useContext } from 'react';
import styled from 'styled-components';
import { Logo } from '../../static/svg';
import Button from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import palette from '../../styles/palette';
import Search from './Search';
import AuthContext from '../../context/Store';

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

const Header: React.FC<HeaderProps> = props => {
  const user = useContext(AuthContext);
  console.log('user', user);
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
          {user ? (
            <div>
              <Button size="DEFAULT" color="blue" to="write">
                새글작성
              </Button>

              <Button size="DEFAULT" color="blue" to="logout">
                로그아웃
              </Button>
            </div>
          ) : (
            <Button size="DEFAULT" color="blue" to="login">
              로그인
            </Button>
          )}
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
