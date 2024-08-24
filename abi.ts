const ethers = require("ethers");

// InfuraのURL指定
let network = "rinkeby";
let provider = ethers.getDefaultProvider(network);

// WalletのPrivate key
let privateKey = "xxxxxxxxx";
const signer = new ethers.Wallet(privateKey, provider);

// Contract Address
const contractAddress = "0x80e50bbaCD33b253B6A294e3e21e9d4F6D824111";

// Contract ABI
const contractAbi = [
	{
		inputs: [],
		name: "inc",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "count",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "get",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

const contract = new ethers.Contract(contractAddress, contractAbi, signer);

// transaction実行
const tokenURI = "xxxxx";
const func = async () => {
	const res = await contract.mint(tokenURI);
	console.log(res);
};

func();
