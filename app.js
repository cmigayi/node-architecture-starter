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

  rl.question(`Current project (${project}), Enter entity name (Data model):`, (entity) => {
    /*
    Get the files, create and copy content from files folder where appropriate
    */

    //Data
    utils.createFileAndCopyContent(
      entity,
      'data',
      project,
      'example_data.js'
    );

    // Controller
    utils.createFileAndCopyContent(
      entity,
      'controllers',
      project,
      'example_controller.js'
    );

    // Route;
    utils.createFileAndCopyContent(
      entity,
      'routes',
      project,
      'example_route.js'
    );

    // Model
    utils.createFileAndCopyContent(
      entity,
      'models',
      project,
      'example_model.js'
    );

    // Test
    utils.createFileAndCopyContent(
      entity,
      'test',
      project,
      'example_test.js'
    );
  });
});
