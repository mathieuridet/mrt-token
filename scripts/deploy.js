async function main() {
  const MRToken = await ethers.getContractFactory("MRToken");
  const mrToken = await MRToken.deploy();

  await mrToken.waitForDeployment();

  console.log("MRToken deployed to:", await mrToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
