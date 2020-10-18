const fs = require('fs');
const path = require('path');
const replaceInFile = require('replace-in-file');

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

module.exports = {
  createFileAndCopyContent,
  createDir
}
