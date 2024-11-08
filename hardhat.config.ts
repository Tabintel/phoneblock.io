import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    devnet: {
        url: process.env.DEVNET_RPC_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
