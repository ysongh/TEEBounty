import React, { useState } from 'react';

function CreateBounty() {
  const [title, setTitle] = useState('');
  const [testHash, setTestHash] = useState('');
  const [reward, setReward] = useState('');
  const [status, setStatus] = useState(null);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Bounty</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
              Bounty Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Sort an Array"
              required
            />
          </div>
          <div>
            <label htmlFor="testHash" className="block text-gray-700 font-medium mb-1">
              Test Hash
            </label>
            <input
              id="testHash"
              type="text"
              value={testHash}
              onChange={(e) => setTestHash(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., keccak256 hash of test cases"
              required
            />
          </div>
          <div>
            <label htmlFor="reward" className="block text-gray-700 font-medium mb-1">
              Reward (ETH)
            </label>
            <input
              id="reward"
              type="number"
              step="0.01"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 0.1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Create Bounty
          </button>
        </form>
        {status && (
          <div
            className={`mt-4 p-4 rounded ${
              status.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateBounty;