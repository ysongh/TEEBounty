import React from 'react';

const bounties = [
  { id: 1, title: "Sort an Array", reward: "0.1 ETH" },
  { id: 2, title: "Reverse a String", reward: "0.05 ETH" },
];

function BountyList() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Available Bounties</h2>
            <ul className="space-y-2">
              {bounties.map((bounty) => (
                <li key={bounty.id} className="p-2 bg-gray-50 rounded border border-gray-200">
                  <span className="font-medium">{bounty.title}</span> - {bounty.reward}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BountyList