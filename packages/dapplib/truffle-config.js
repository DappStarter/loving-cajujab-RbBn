require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife olympic system index random mad exchange heavy arch metal giggle'; 
let testAccounts = [
"0xd3a0fb5331d46f11780ee0603384a8ba5188fcc01e25c17da8be3239c5197448",
"0x0c4697619df80c4813f4b50d3775a4005f2ff29c355022cd469cc9b2d56ba0dd",
"0xe5f4cc12ceb47dc14514cfa85d634d1a3763ee4e453f222cab71d9306f3b12c3",
"0x60160636e5c6139bb9e75942666a79532a429d2ef719a243a5279fa57a06bc2f",
"0xcd545d52e5b651416b63eb6ed18dabfc734896690cfec5535488e98209ea1218",
"0x57bee5c7b5b43412da611163b565fae85e22fa6ce9faa6323fdc9247e0008162",
"0x9d2c7f04271fe23413e03e4a3bf1b0869ec19bb10f7df18cb5d708913f123815",
"0xd998a27d010d95f0431a08049cfe7ed0569bddf399fc7605e681fe705fb2dec3",
"0x07a3bd6ec7d218b806d03e882e82b6d3b3ea76c37f9b75e5188e9d1224bdf570",
"0x74e01ad639e4689d99077672374fb35eb75a63b80c09c0db6f1ad6ff04333f90"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


