require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "b59afe3e24593747bd6cf4e6df5def21024888dad1818d6ac74418037a371f92";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
