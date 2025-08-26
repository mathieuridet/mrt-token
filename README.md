#  MRToken — Custom ERC-20 Token

A custom ERC-20 token built using OpenZeppelin, featuring a fixed total supply and deployed to the Sepolia testnet for demonstration and portfolio purposes.

---

##  Features

- Fixed total supply (1,000 MRT with 18 decimals) minted to deployer
- Built with OpenZeppelin's audited `ERC20` implementation
- Deployed to Sepolia testnet and source-verified on Etherscan
- Includes a Hardhat script to perform token transfers

---

##  Tech Stack

| Component         | Description                                                  |
|------------------|--------------------------------------------------------------|
| Solidity         | `^0.8.20` using OpenZeppelin's ERC20 framework              |
| Hardhat          | Development, testing, and deployment environment             |
| Ethers.js        | Interactions via deploy & transfer scripts                   |
| Sepolia Testnet  | Deployment target for end-to-end testing                     |
| Etherscan        | Source verified with API via Hardhat plugin                  |

---

##  Deployment

- **Sepolia deployment address:**  
  `0x39ac9aB1a125C065c8c9DaaC9b793c288AfaFab6`

- **Verified source on Etherscan:**  
  [View MRToken on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x39ac9aB1a125C065c8c9DaaC9b793c288AfaFab6)

---

## ​ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/mathieuridet/mrt-token.git
cd mrt-token

# 2. Install dependencies
yarn install

# 3. Create a .env file with your keys
cp .env.example .env
# Fill in your ALCHEMY_URI, PRIVATE_KEY, ETHERSCAN_API_KEY

# 4. Compile contracts
npx hardhat compile

# 5. Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

# 6. Optional: Verify on Etherscan
npx hardhat verify --network sepolia 0xYourContractAddress 0xInitialOwnerAddress

# 7. Transfer tokens
npx hardhat run scripts/transfer.js --network sepolia
