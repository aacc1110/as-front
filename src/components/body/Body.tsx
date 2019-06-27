import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/responsive';

const BodyBlock = styled.div`
  width: ${breakpoints.xlarge};
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 8rem;
  border: 1px solid black;
`;

/* const Left = styled.div`
  width: 98px;
  border: 1px solid black;
`;
const Main = styled.div`
  width: 1100px;
  border: 1px solid black;
`;

interface BodyNamespace {
  Left: typeof Left;
  Main: typeof Main;
} */

interface BodyProps {}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <BodyBlock>{children}</BodyBlock>;
};
/* Body.Left = Left;
Body.Main = Main; */

export default Body;
