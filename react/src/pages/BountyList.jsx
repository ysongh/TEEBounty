import React from 'react';
import { Link } from 'react-router-dom';

const bounties = [
  { id: 1, title: "Sort an Array", reward: "0.1 ETH" },
  { id: 2, title: "Reverse a String", reward: "0.05 ETH" },
];

function BountyList() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Available Bounties</h1>
        <ul className="space-y-4">
          {bounties.map((bounty) => (
            <li
              key={bounty.id}
              className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex justify-between items-center"
            >
              <div>
                <span className="font-medium text-gray-700">{bounty.title}</span> - {bounty.reward}
              </div>
              <Link
                to="/submit"
                className="bg-blue-600 text-white font-semibold py-1 px-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Solve
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BountyList