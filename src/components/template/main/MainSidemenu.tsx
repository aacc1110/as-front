import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import palette from '../../../styles/palette';
import { MdTrendingUp, MdAccessTime, MdRssFeed } from 'react-icons/md';

const MainSideMenuBlock = styled.div`
  position: sticky;
  top: 1.5rem;
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
  font-size: 0.785rem;
  border-left: 2px solid transparent;
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

interface MainSideMenuProps {}

const MainSideMenu: React.SFC<MainSideMenuProps> = props => {
  return (
    <MainSideMenuBlock>
      <MenuItem
        to="/trend"
        activeClassName="active"
        isActive={(match, location) => {
          return ['/', '/trend'].indexOf(location.pathname) !== -1;
        }}
      >
        <MdTrendingUp />
        인기
      </MenuItem>
      <MenuItem to="/recent" activeClassName="active">
        <MdAccessTime />
        최신
      </MenuItem>
      <MenuItem to="/following" activeClassName="active">
        <MdRssFeed />
        구독
      </MenuItem>
    </MainSideMenuBlock>
  );
};

export default MainSideMenu;
