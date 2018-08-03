const path = require('path');
const config = require('config');
const electronIsDev = require('electron-is-dev');

let environment;

// In production mode, NODE_ENV cannot be customized by the user
if (electronIsDev) {
  environment = process.env.NODE_ENV || 'development';
} else {
  environment = 'production';
}

// Set environment vars to configure node-config before requiring it
process.env.NODE_ENV = environment;
process.env.NODE_CONFIG_DIR = path.join(__dirname, '..', 'config');

config.environment = environment;



function iniGlobal(){
  global.version = config.has('Version') ? config.get('Version') : '0.0.0';
}

module.exports = {
  config : config,
  ini : iniGlobal
};
