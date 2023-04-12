const crypto = require('crypto');

const headerTime = Math.floor(Date.now()/1000);
console.log(headerTime)
const apiKey = 'RXMXP27FUU8UJ3GRUWA6';
const apiSecret = '4T67v7FTRv3jFggGLHu#zsYK7W$aJnYf28x7QcAL';

const apiHeaderTime = headerTime;

const sha1Algorithm = 'sha1';
const sha1Hash = crypto.createHash(sha1Algorithm);
const data4Hash = apiKey + apiSecret + apiHeaderTime;
sha1Hash.update(data4Hash);
const hash4Header = sha1Hash.digest('hex');

console.log(hash4Header);
