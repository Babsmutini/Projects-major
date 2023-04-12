const CryptoJS = require('crypto-js');

const headerTime = Math.floor(Date.now()/1000);
console.log(headerTime)
const apiKey = 'RXMXP27FUU8UJ3GRUWA6';
const apiSecret = '4T67v7FTRv3jFggGLHu#zsYK7W$aJnYf28x7QcAL';

const apiHeaderTime = headerTime;

const sha1Hash = CryptoJS.SHA1(apiKey + apiSecret + apiHeaderTime);


// export const hash4Header = sha1Hash.toString(CryptoJS.enc.Hex);
const hash4Header = sha1Hash.toString(CryptoJS.enc.Hex);

console.log(hash4Header);

