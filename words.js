export const possibleWords = [
	'airdrop',
	'altcoin',
	'bearish',
	'bitcoin',
	'bullish',
	'digital',
	'fudster',
	'futures',
	'genesis',
	'halving',
	'hashing',
	'holding',
	'hedging',
	'inflate',
	'rugpull',
	'satoshi',
	'staking',
	'ledgers',
	'private',
	'vitalik',
	'buterin',
	'account',
	'address',
	'airnode',
	'dumping',
	'average',
	'auction',
	'ropsten',
	'onchain',
	'bridges',
	'erc1115',
	'unicorn',
	'mainnet',
	'minting',
	'cardano',
	'stellar',
	'binance',
	'polygon',
	'sandbox',
	'vechain',
	'network',
	'harmony',
	'celsius',
	'testnet',
	'txnhash',
];

export const allowedWords = require('fs').readFileSync('./words.txt', 'utf8').split('\n').concat(possibleWords);

export const getTodayWord = () => {
	const startDate = new Date('2022-03-14').getTime();
	const today = new Date().getTime();

	const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
	return possibleWords[days % possibleWords.length];
};
