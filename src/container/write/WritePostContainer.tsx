import React from 'react';
import styled from 'styled-components';
import QuillEditor from '../../components/write/QuillEditor';

const WritePostContainerBlock = styled.div``;

interface WritePostContainerProps {}

const WritePostContainer: React.FC<WritePostContainerProps> = props => {
  return (
    <WritePostContainerBlock>
      <QuillEditor />
    </WritePostContainerBlock>
  );
};

export default WritePostContainer;
