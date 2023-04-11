module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },

  compilers: {
    solc: {
      version: "^0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  defaultNetwork: "truffle",
  networks: {
    truffle: {
      chainId: 1337,
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
const fs = require("fs");
const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";


