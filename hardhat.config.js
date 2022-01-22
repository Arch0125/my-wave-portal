require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/75lqEUwi0CFEi-qJpHKgsFskrofK5wft",
      accounts: ["70a7a8f79d89db9f6e6a66d2552ea824cdea2cf31d3a86b13966cf7005dc4953"],
    },
  },
};