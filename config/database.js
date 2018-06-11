// Esta fución se ha copiado/pegado de la página 'https://nodejs.org/docs/latest-v9.x/api/crypto.html#crypto_crypto_randombytes_size_callback'

const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports= {
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: 'crypto',
    db: 'mean-angular-2'
}