// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
const PROJECT_NAME = "Nuggz"

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const project = await ethers.getContractFactory(PROJECT_NAME);
  const deployedObj = await project.deploy();
  await deployedObj.deployed();

  console.log("project address:", deployedObj.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(deployedObj);
}

function saveFrontendFiles(project) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../constants/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ [PROJECT_NAME]: project.address }, undefined, 2)
  );

  const projectArtifact = artifacts.readArtifactSync(PROJECT_NAME);

  fs.writeFileSync(
    contractsDir + `/${PROJECT_NAME}.json`,
    JSON.stringify(projectArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
