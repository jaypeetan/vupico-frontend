const fs = require("fs");

export const getConfig = async () => {
    const configData = await fs.readFileSync("./config/config.json")
    if (configData) {
        return JSON.parse(configData)
    }
}