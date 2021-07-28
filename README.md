A Smart Contract Project

## Local Development

It would be nice to dockerize these services.
Till then, tmux sessions makes it easiest to get these started

1. run local network: `npx hardhat node`
2. recompile contracts: `npx hardhat compile`
3. deploy: `npx hardhat run scripts/deploy.js --network localhost`
4. faucet: `npx hardhat --network localhost faucet <your address>`
