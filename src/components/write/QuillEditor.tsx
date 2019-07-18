import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditorBlock = styled.div`
  height: 375px;
`;

interface QuillEditorProps {}

const QuillEditor: React.FC<QuillEditorProps> = props => {
  return (
    <QuillEditorBlock>
      <ReactQuill />
    </QuillEditorBlock>
  );
};

export default QuillEditor;
