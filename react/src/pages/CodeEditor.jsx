import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    console.log(code);
  };

  return (
    <div>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={handleSubmit}>Submit Code</button>
    </div>
  )
}

export default CodeEditor