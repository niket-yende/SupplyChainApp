# SupplyChainApp
This application is for supply chain use case deployed on ethereum

## Setup guide
1. Install ganache: 
https://trufflesuite.com/ganache/
1. Install truffle:
`npm install truffle -g`
1. Deploy contracts:
`truffle deploy --reset`
1. Deploy on development network:
`truffle deploy --network development --reset`
1. Using infura custom provider:
https://trufflesuite.com/guides/using-infura-custom-provider/
1. Truffle compile: <br/>
`truffle compile --all` <br/>
`truffle compile --all --network development` <br/>
1. Command line testing:
```
niket@niket-X555LAB:~/blockchain/SupplyChainApp$ truffle console
truffle(development)> 
```
8. Javascript testing:
```
truffle create test SupplyChain
truffle create test ERC20Token
```

### Smart contract best practices
https://consensys.github.io/smart-contract-best-practices/


