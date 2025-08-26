const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const initialOwner = deployer.address;

  const F = await ethers.getContractFactory("MRToken");
  const c = await F.deploy(initialOwner);
  await c.waitForDeployment();

  console.log("MRToken:", await c.getAddress());
  console.log("Owner  :", await c.owner());
}

main().catch((e) => { console.error(e); process.exit(1); });