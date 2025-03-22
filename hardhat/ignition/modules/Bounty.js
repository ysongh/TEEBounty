const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BountyModule", (m) => {
  const bounty = m.contract("Bounty", []);

  return { bounty };
});
