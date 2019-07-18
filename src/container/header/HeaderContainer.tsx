import React, { useContext } from 'react';

import Header from '../../components/header/Header';
import { useMutation } from 'react-apollo-hooks';
import { LOGOUT } from '../../graphql/user';
import { UserContext } from '../../context/Store';
import { RouteComponentProps, withRouter } from 'react-router';

interface HeaderContainerProps extends RouteComponentProps<{}> {}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ history }) => {
  const user = useContext(UserContext);
  const logOut = useMutation(LOGOUT);

  const logout = () => {
    logOut();
    localStorage.removeItem('CURRENT_USER');
    document.location.href = '/';
  };

  return <Header logout={logout} user={user} />;
};

export default withRouter(HeaderContainer);
