const { ethers } = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const Token = await ethers.getContractFactory("BEP20Token");
  const token = await Token.deploy("Ufukcan Token", "UFC");
  console.log("Account balance:", ethers.utils.formatUnits(await deployer.getBalance(), 18));
  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });