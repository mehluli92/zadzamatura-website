import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ initialValue, onChange }) => {
  const handleEditorChange = (content) => {
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <Editor
      apiKey="9tghhgzbiis11bamu8610rfjcx19y1l9ow30gkgcpodbwcga" // Replace with your TinyMCE API key
      value={initialValue}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
