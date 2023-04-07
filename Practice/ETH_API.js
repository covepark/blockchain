// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js
import { Network, Alchemy } from "../Practice/node_modules/alchemy-sdk/dist/cjs/index.js";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "dRi_b5bO9h6worWNGqaQyEhk94A8J74v", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

// Get the latest block number
alchemy.core.getBlockNumber().then(console.log);