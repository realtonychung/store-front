import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Web3 from "web3";
import ADDRESS from "../constants/contracts/contract-address.json";
import ARTIFACT from "../constants/contracts/Nuggz.json";

function Mint() {
  const router = useRouter();

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  // TEST ONLY
  const [walletBalance, setWalletBalance] = useState(null);

  const [nuggContract, setNuggContract] = useState(null)

  // INFO FROM SMART Contract
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalMax, setTotalMax] = useState(0);
  const [saleStarted, setSaleStarted] = useState(false);
  const [nuggPrice, setNuggPrice] = useState(0);

  useEffect(() => {
    signIn();
  }, []);

  async function signIn() {
    if (typeof window.web3 !== "undefined") {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum
      .enable()
      .then(function (accounts) {
        window.web3.eth.net
          .getNetworkType()
          // checks if connected network is mainnet (change this to ropsten/rinkeby if you wanna test on testnet)
          .then((network) => {
            console.log(network);
            if (network != "main") {
              alert(
                "You are on " +
                  network +
                  " network. Change network to mainnet or you won't be able to do anything here"
              );
            }
          });
        let wallet = accounts[0];
        setWalletAddress(wallet);
        setSignedIn(true);
        callContractData(wallet);
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error);
      });
  }

  async function callContractData(wallet) {
    let balance = await web3.eth.getBalance(wallet);
    setWalletBalance(balance);
    console.log(ADDRESS, 'address')

    const nuggContract = new window.web3.eth.Contract(ARTIFACT.abi, ADDRESS.Nuggz);
    setNuggContract(nuggContract);

    const salebool = await nuggContract.methods.saleIsActive().call();
    console.log("saleisActive", salebool);
    setSaleStarted(salebool);

    const totalSupply = await nuggContract.methods.totalSupply().call();
    setTotalSupply(totalSupply);

    const totalMax = await nuggContract.methods.MAX_NUGGZ().call();
    setTotalMax(totalMax);

    const nuggPrice = await nuggContract.methods.nuggPrice().call();
    setNuggPrice(nuggPrice);
  }

  async function mintNugg(how_many_nuggs) {
    if (nuggContract) {
      const price = Number(nuggPrice) * how_many_nuggs;

      const gasAmount = await nuggContract.methods
        .mintNuggz(how_many_nuggs)
        .estimateGas({ from: walletAddress, value: price });

      nuggContract.methods
        .mintNuggz(how_many_nuggs)
        .send({ from: walletAddress, value: price, gas: String(gasAmount) })
        .on("transactionHash", function (hash) {
          console.log("transactionHash", hash);
        });

      const totalSupply = await nuggContract.methods.totalSupply().call();
      setTotalSupply(totalSupply);

    } else {
      console.log("Wallet not connected");
    }
  }


  // Ethereum wallets inject the window.ethereum object. If it hasn't been
  // injected, we instruct the user to install MetaMask.
  // if (!window || window.ethereum === undefined) {
  //   return <NoWalletDetected />;
  // }

  return (
    <>
      <h1>Mint</h1>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => mintNugg(1)}>Mint</button>
      {
        signedIn && <h2>{`${totalSupply} bought of ${totalMax}`}</h2>
      }
      <h3>You will need to reload the page after minting to see a change in supply</h3>
      <style jsx>{``}</style>
    </>
  );
}

export default Mint;
