const { req, serverURL, error } = require("../vitals.js");

module.exports = exports = function (__apiKey) {
    return class Box {
        #apiKey;
        
        constructor (boxID) {
            this.#apiKey = __apiKey;

            this.id = boxID;
        };

        set (key = "", value = "") {
            const _this = this;

            if (typeof value === "object") {
                value = JSON.stringify(value);
            };

            return new Promise(function (resolve, reject) {
                req({
                    method: "POST",
                    url: `${serverURL}/api/box/ops/set?` +
                        `apiKey=${encodeURIComponent(_this.#apiKey)}&` +
                        `box=${encodeURIComponent(_this.id)}&` +
                        `key=${encodeURIComponent(key)}&` +
                        `value=${encodeURIComponent(value)}`
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(true);
                });
            });
        };

        get (key = "") {
            const _this = this;

            return new Promise(function (resolve, reject) {
                req({
                    method: "GET",
                    url: `${serverURL}/api/box/ops/get?` +
                        `apiKey=${encodeURIComponent(_this.#apiKey)}&` +
                        `box=${encodeURIComponent(_this.id)}&` +
                        `key=${encodeURIComponent(key)}`
                }).then(({ data }) => {
                    if (data && data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(data);
                });
            });
        };

        getAll () {
            const _this = this;

            return new Promise(function (resolve, reject) {
                req({
                    method: "GET",
                    url: `${serverURL}/api/box/ops?` +
                        `apiKey=${encodeURIComponent(_this.#apiKey)}&` +
                        `box=${encodeURIComponent(_this.id)}`
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(data);
                });
            });
        };

        delete (key) {
            const _this = this;

            return new Promise(function (resolve, reject) {
                req({
                    method: "DELETE",
                    url: `${serverURL}/api/box/ops/delete?` +
                        `apiKey=${encodeURIComponent(_this.#apiKey)}&` +
                        `box=${encodeURIComponent(_this.id)}&` +
                        `key=${encodeURIComponent(key)}`
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(true);
                });
            });
        };
    };
};