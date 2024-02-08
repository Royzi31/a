const { AoiClient, LoadCommands, Util } = require("aoi.js");

const { token, prefix, intents, events } = require('./config.json')



const bot = new AoiClient({
    token,
    prefix,
    intents,
    events,
    disableFunctions: ["$clientToken"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "../database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

module.exports = bot