import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";
import HardhatEthoko from "hardhat-ethoko";
import "dotenv/config";

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin, HardhatEthoko],
  ethoko: {
    project: "uniswap-v4-core",
    compilationOutputPath: "./out",
    storageConfiguration: {
      type: "local",
      path: "./ethoko-storage",
    },
  },
  solidity: {
    // Profiles are mandatory but are not used here since we build with `Forge
    profiles: {
      default: {
        version: "0.8.26",
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: {
        mnemonic: configVariable("SEPOLIA_MNEMONIC"),
      },
    },
  },
});
