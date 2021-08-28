module.exports = exports = class Client {
    constructor (_apiKey) {
        this.apiKey = _apiKey;

        this.boxes = require("./classes/box.js")(this.apiKey);
        this.Box = require("./classes/ops.js")(this.apiKey);
    };
};