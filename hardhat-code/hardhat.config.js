require("dotenv").config()
require("@nomiclabs/hardhat-waffle")

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL
const PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
}
