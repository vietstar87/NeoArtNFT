// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {ethers, upgrades } from "hardhat";


async function main() {
    const NeoArtNft = await ethers.getContractFactory("NeoArtNFT");
    const nft = await upgrades.deployProxy(NeoArtNft);
    await nft.deployed();
    console.log('NFT address',nft.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
