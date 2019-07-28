import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill-2';
import 'quill/dist/quill.snow.css';

const QuillEditorBlock = styled.div`
  .quill-editor {
    margin: 0 auto;
    width: 880px;
    min-height: 500px;
    margin-top: 100px;
  }
  .quill-editor .ql-editor {
    /*max-height: 400px;*/
  }
  .quill-editor .ql-toolbar.ql-snow,
  .quill-editor .ql-container.ql-snow {
    border: none;
  }
  .quill-editor .ql-toolbar {
    position: fixed;
    z-index: 100;
    background: #ccc;
    top: 0;
  }
`;

interface QuillEditorProps {}

const QuillEditor: React.FC<QuillEditorProps> = props => {
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
        [
          { code: 'code' },
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
          { align: [] }
        ],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: { image: 'imageHandler' }
    },
    clipboard: { matchVisual: false }
  };
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'size',
    'color',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align'
  ];
  return (
    <QuillEditorBlock>
      <ReactQuill modules={modules} formats={formats} />
    </QuillEditorBlock>
  );
};

export default QuillEditor;
