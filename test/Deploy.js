const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("BEP20Token");
    const token = await Token.deploy("Ufukcan Token", "UFC");

    console.log("Token address:", token.address);
    console.log("Account balance:", ethers.utils.formatUnits(await deployer.getBalance(), 18));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
