import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";

const bscscanApiKey = "RF6Y2YFI6M9EQB75BYHAZMXMKFPU883V7Z";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const mnemonic =
  "collect gospel cream push tell suffer vintage slam piece endless library indoor";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "HTTP://127.0.0.1:7545",
      accounts: { mnemonic: mnemonic },
    },
    hardhat: {
      accounts: { mnemonic: mnemonic },
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic },
      timeout: 500000,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: bscscanApiKey,
  },
  solidity: "0.8.4",
};
