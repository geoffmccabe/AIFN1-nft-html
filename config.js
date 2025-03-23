// Configuration for AIFN1-nft-html frontend
const blockchainConfig = {
    sepolia: {
        contractAddress: "0x526383e54d97e65e7cc447c467dac5d37fa32dc9", // New deployed contract
        generationFee: "0.001", // 0.001 ETH on Sepolia
        forgingFeePerTier: "0.001", // 0.001 ETH per tier on Sepolia
        gasLimit: 300000 // Base gas limit, overridden by estimation
    },
    vercelUrl: "https://aifn-1-api.vercel.app" // API URL
};
