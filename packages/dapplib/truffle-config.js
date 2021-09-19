require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot blanket razor scrub million idea kite slot gas'; 
let testAccounts = [
"0xead4dba9dc5afdf4e6ae7ad4ae513cf0296d83facfc6062946e4b3b783dcdb7c",
"0xc46c9822f061f4052246e858e869528350c1ce93cc3027af976e44824e04db4a",
"0x43b4378b88929a8affcf0174812596ec202c22bbf15e66e2773f9653d3883988",
"0x99fd507c344b9c8d7c580d6d2c23cb6c22a7cafe56801a92a256b67beaf95ad1",
"0x331d0d70a16a1920c1f775aa7755111daaaca34a26111d784af45b868c8154d1",
"0xb1c1b47f27a0498d9a0b4c4e154de87187494264a7c57ca55a8665cdd7a89c39",
"0x82d7fb2603bf98859f0446f68d4f0472106d966fe2007b781dc06f2c7c297561",
"0xe2535d0cbbba5066f2974dc67f0229ed237e265d07f76a55f43f7c42c1f3e496",
"0x74a7e18af6d42e003405e0b43f2292856ad8449f7effefd8f3c6ea3b753f7bc1",
"0x48912dddd5dcb92152f4a8ab7a1a94f9c06f4a107ba20ba35b0a0e37642ddb39"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

