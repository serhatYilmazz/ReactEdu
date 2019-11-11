function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
    this.networkNodes = [];
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
};
