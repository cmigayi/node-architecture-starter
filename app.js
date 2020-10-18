const fs = require('fs');
const path = require('path');
const readline = require('readline');
const utils = require('./utils');
const pjson = require('../../package.json');

// Get project name from project package.json file
var project = pjson.name;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if(utils.areAllDirectoriesCreated()){
  utils.askQuestion2(project, rl);
}else{
  rl.question(`Create directories (data, models, controllers, routes, test). Choose Y/N: `, (reply) => {
    if(reply === 'N' || reply === 'n'){
      // exit
      rl.close();
      process.exit(0);
    }

    utils.createDir('./data');
    utils.createDir('./models');
    utils.createDir('./controllers');
    utils.createDir('./routes');
    utils.createDir('./test');

    utils.askQuestion2(project, rl);
  });
}
