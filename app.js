const fs = require('fs');
const path = require('path');
const readline = require('readline');
const utils = require('./utils');
const pjson = require('./package.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`Create directories (data, models, controllers, routes, test): Y/N`, (reply) => {
  if(reply == 'N' || reply == 'n'){
    // exit
  }

  utils.createDir('./data');
  utils.createDir('./models');
  utils.createDir('./controllers');
  utils.createDir('./routes');
  utils.createDir('./test');

  rl.question(`Current project (${pjson.name}), Enter entity name (Data model):`, (entity) => {
    /*
    Get the files, create and copy content from files folder where appropriate
    */

    //Data
    utils.createFileAndCopyContent(
      entity,
      'data',
      'example_data.js'
    );

    // Controller
    utils.createFileAndCopyContent(
      entity,
      'controllers',
      'example_controller.js'
    );

    // Route;
    utils.createFileAndCopyContent(
      entity,
      'routes',
      'example_route.js'
    );

    // Model
    utils.createFileAndCopyContent(
      entity,
      'models',
      'example_model.js'
    );

    // Test
    utils.createFileAndCopyContent(
      entity,
      'test',
      'example_test.js'
    );
  });
});
