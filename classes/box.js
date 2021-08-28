const { req, serverURL, error } = require("../vitals.js");

module.exports = exports = function (apiKey) {
    return {
        getAll: function () {
            return new Promise(function (resolve, reject) {
                req({
                    method: "GET",
                    url: `${serverURL}/api/box?apiKey=${encodeURIComponent(apiKey)}`,
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(data);
                });
            });
        },

        create: function (name = "", lambda = true) {
            return new Promise(function (resolve, reject) {
                req({
                    method: "POST",
                    url: `${serverURL}/api/box/create?apiKey=${encodeURIComponent(apiKey)}&name=${encodeURIComponent(name)}&lambda=${encodeURIComponent(lambda)}`
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(new (require("./ops.js")(apiKey))(data.box.id));
                });
            });
        },

        delete: function (boxID) {
            return new Promise(function (resolve, reject) {
                req({
                    method: "DELETE",
                    url: `${serverURL}/api/box/delete?apiKey=${encodeURIComponent(apiKey)}&box=${encodeURIComponent(boxID)}`
                }).then(({ data }) => {
                    if (data.success === false) {
                        return error(`${data.fault}: ${data.message}`);
                    };

                    resolve(true);
                });
            });
        }
    };
};