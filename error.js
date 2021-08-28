module.exports = exports = function (message) {
    console.error(new Error(message));

    return new Error(message);
};