const fetch = require('node-fetch');

const url = 'https://eth-mainnet.g.alchemy.com/v2/dRi_b5bO9h6worWNGqaQyEhk94A8J74v';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({id: 1, jsonrpc: '2.0', method: 'eth_blockNumber'})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));