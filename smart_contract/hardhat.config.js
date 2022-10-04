// https://eth-goerli.g.alchemy.com/v2/SI1LCxnPJafOPPe2GW_p4hPq9lhCOk_N
require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SI1LCxnPJafOPPe2GW_p4hPq9lhCOk_N",
      accounts: [
        "158d204d92c94a561d2a11616dd4e760a5d0426090f9909aa1c19663676abb64",
      ],
    },
  },
};
