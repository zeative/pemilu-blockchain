import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners()
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const voting = await ethers.getContractAt("Voting", contractAddress)

  const tx1 = await voting.connect(deployer).addCandidate("Kejaa")
  await tx1.wait()

  const tx2 = await voting.connect(deployer).addCandidate("zaadevofc")
  await tx2.wait()

  console.log("Kandidat ditambahkan!")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
