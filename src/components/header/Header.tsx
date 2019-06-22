import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../static/svg';
import Button from '../../styles/Button';
import Search from './Search';
import { breakpoints } from '../../styles/responsive';

const HeaderBlock = styled.div`
  width: 100%;
  .wrapper {
    border: 1px solid black;
    width: ${breakpoints.xlarge};
    height: 4rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      border: 1px solid black;
    }
  }
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  return (
    <HeaderBlock>
      <div className="wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="search">
          <Search />
        </div>
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
