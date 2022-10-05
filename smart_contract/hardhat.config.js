// https://eth-goerli.g.alchemy.com/v2/SI1LCxnPJafOPPe2GW_p4hPq9lhCOk_N
require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");
const GOERLI_URL = import.meta.env.GOERLI_URL;
const METAMASK_ACCOUNT = import.meta.env.METAMASK_ACCOUNT;

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [METAMASK_ACCOUNT],
    },
  },
};
