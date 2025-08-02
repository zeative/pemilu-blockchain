import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VotingModule = buildModule("VotingModule", (m) => {
  const voting = m.contract("Voting");
  return { voting };
});

export default VotingModule;
