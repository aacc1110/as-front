import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/responsive';

const BodyBlock = styled.div`
  width: ${breakpoints.xlarge};
  margin: 0 auto;
  margin-top: 4.5rem;
  margin-bottom: 8rem;
  border: 1px solid black;
`;

interface BodyProps {}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <BodyBlock>{children}</BodyBlock>;
};

export default Body;
