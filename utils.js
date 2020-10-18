const fs = require('fs');
const path = require('path');
const replaceInFile = require('replace-in-file');

function askQuestion2(project, rl){
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
}

function createFileAndCopyContent(entity, dir, project, copyFrom){
  // Add file path
  var des = path.resolve('../'+project+'/'+dir+'/'+entity+'.js');
  var copyFromUrl = path.resolve('../'+project+'/node_modules/node-architecture-starter/node-starter-gen/files/'+copyFrom);

  fs.writeFile(des, "", { flag: 'wx' }, (err) => {
    if(err) console.log("write error: "+err);
    fs.copyFile(copyFromUrl, des, (err) => {
      if(err){
        console.log("Copy error: "+err);
      }else{
        replaceItem(entity, dir, project);
        console.log("Copied from "+copyFromUrl+" successfully");
        console.log("If everything is successfully, you can exit the console (Ctrl + C)");
      }
    });
  });
}

function replaceItem(entity, dir, project){
  // Add file path
  var des = path.resolve('../'+project+'/'+dir+'/'+entity+'.js');

  // Capitalize entity first letter
  capitalizedEntity = entity.charAt(0).toUpperCase() + entity.slice(1);
    const fd = fs.openSync(des, "r");
    fs.fchmod(fd, 0o777, (err) => {
      if(err) console.log("error: "+err);
      console.log("File permission change successful");
      // Replace string
      const options = {
        files: des,
        from: [/customer/g, /Customer/g],
        to: [entity, capitalizedEntity]
      };
      replaceInFile(options, (err) => {
        if(err) console.log("error: "+err);
        console.log("File content replacement successful");
      });
    });
}

function createDir(dataDir){
  if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
  }
}

function areAllDirectoriesCreated(){
  if(fs.existsSync('./data')
  && fs.existsSync('./models')
  && fs.existsSync('./controllers')
  && fs.existsSync('./routes')
  && fs.existsSync('./test')){
    return true;
  }
  return false;
}

module.exports = {
  askQuestion2,
  createFileAndCopyContent,
  createDir,
  areAllDirectoriesCreated
}
