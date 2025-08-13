const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x261b08C2227E26bCD781BcA0fcfc7c665D831D11";
  const recipient = "0xE930572eEA58D85aBDA7FF4C53Ff865a2B94306D";

  const amount = "30";

  // Get signer (this will be the deployer or any account with balance)
  const [sender] = await ethers.getSigners();

  // Get the contract
  const MRToken = await ethers.getContractFactory("MRToken");
  const mrToken = MRToken.attach(contractAddress);

  const senderBalanceBefore = await mrToken.balanceOf(sender.address);
  const recipientBalanceBefore = await mrToken.balanceOf(recipient);

  console.log(`Sender's balance: ${ethers.formatUnits(senderBalanceBefore, 18)} MRT, recipient's balance: ${ethers.formatUnits(recipientBalanceBefore, 18)} MRT`)
  console.log('');
  console.log(`Transferring ${amount} tokens from ${sender.address} to ${recipient}...`);

  // Convert amount to token's smallest units (wei-like)
  const decimals = await mrToken.decimals();
  const amountInUnits = ethers.parseUnits(amount, decimals);

  // Send the transfer transaction
  const tx = await mrToken.transfer(recipient, amountInUnits);
  await tx.wait();

  console.log(`✅ Transfer complete! Tx hash: ${tx.hash}`);
  console.log('');

  const senderBalanceAfter = await mrToken.balanceOf(sender.address);
  const recipientBalanceAfter = await mrToken.balanceOf(recipient);

  console.log(`Sender's balance: ${ethers.formatUnits(senderBalanceAfter, 18)} MRT, recipient's balance: ${ethers.formatUnits(recipientBalanceAfter, 18)} MRT`)  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
