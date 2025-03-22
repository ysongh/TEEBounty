import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    console.log(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <Editor
            height="50vh"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value)}
            className="border border-gray-300 rounded"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>
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