#  MRToken — Custom ERC-20 Token

A custom ERC-20 token built with OpenZeppelin, featuring ownership controls, EIP-2612 permit signatures (gasless approvals), and a capped max supply. Deployed for testing on the Sepolia testnet.

---

##  Features

- ERC-20 with 18 decimals
- Ownable: restricted mint(...) for the contract owner
- ERC20Permit (EIP-2612): off-chain approvals via signatures
- Capped supply: 1,000,000 MRT maximum (ERC20Capped)
- Initial mint: 1000 MRT minted in the constructor
- Hardhat scripts for deploy/transfer and Etherscan verification

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
  `0xc6b1E9aCF8f08EE96F33a2eA420C483153B8F756`

- **Verified source on Etherscan:**  
  [View MRToken on Sepolia Etherscan](https://sepolia.etherscan.io/address/0xc6b1E9aCF8f08EE96F33a2eA420C483153B8F756)

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
