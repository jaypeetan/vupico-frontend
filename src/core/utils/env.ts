// const fs = require('fs');
// const path = require('path');

// let cachedEnvData: any = null;
// let envFileTimestamp: any = null;

export const getEnv = async (isServerSide = true) => {
  if (isServerSide) {
    return process.env;
    // const currentTimestamp = fs.statSync(path.resolve('./env.json')).mtimeMs;

    // if (cachedEnvData && envFileTimestamp === currentTimestamp) {
    //   console.log('getting env data from cache');
    //   return cachedEnvData;
    // }
    // try {
    //   const configData = await fs.readFileSync('./env.json');
    //   if (configData) {
    //     console.log('getting env data from file system');
    //     cachedEnvData = JSON.parse(configData);
    //     envFileTimestamp = currentTimestamp;
    //     return cachedEnvData;
    //   }
    // } catch (error: any) {
    //   throw new Error(`Error reading env from file system, ${error.message}`);
    // }
  } else {
    console.log('getting env data from api');
    try {
      const configRawData = await fetch(`/api/env`);
      return await configRawData.json();
    } catch (error: any) {
      throw new Error(`Error fetching env from api, ${error.message}`);
    }
  }
};
