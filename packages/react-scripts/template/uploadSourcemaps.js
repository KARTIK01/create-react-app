/* eslint-disable import/no-dynamic-require,global-require,import/no-extraneous-dependencies */
const path = require('path');
const { upload } = require('sentry-files');
const fs = require('fs');

/**
 * File to update build map files on sentry
 */

// NOTE: this is project name, specific to this project.
const PROJECT_NAME = 'agent';

function getEnvJson() {
  const envFile = fs.readFileSync('.env', 'utf8');
  return envFile.split('\n')
    .reduce((acc, item) => {
      const [key, value] = item.split('=');
      acc[key] = value.slice(1, -1);
      return acc;
    }, {});
}

const env = getEnvJson();


function getFiles() {
  const BUILD_DIR = 'dist';
  const assetsFile = path.resolve(BUILD_DIR, 'asset-manifest.json');
  const filePaths = require(assetsFile);
  const jsFilesRegex = /(\.js(.map)?)$/;
  return Object.keys(filePaths)
    .filter(f => jsFilesRegex.test(f))
    .map(f => ({
      name: `~/${filePaths[f]}`,
      path: path.resolve(path.join(__dirname, BUILD_DIR, filePaths[f])),
    }));
}

upload({
  version: env.REACT_APP_VERSION,
  organization: 'organization',
  project: PROJECT_NAME,
  token: env.REACT_APP_SENTRY_API_KEY,
  files: getFiles(),
})
  .then(data => console.log('----- SUCCESS ----\n', data))
  .catch(error => console.log('---- ERROR ----\n', error));
