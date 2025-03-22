import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    console.log(code);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Submit Your Code</h1>
        <Editor
          height="50vh"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          className="border border-gray-300 rounded mb-4"
          options={{ minimap: { enabled: false }, scrollBeyondLastLine: false }}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Code
        </button>
      </div>
    </div>
  )
}

export default CodeEditor