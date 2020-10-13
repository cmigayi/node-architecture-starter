const fs = require('fs');
const path = require('path');
const replaceInFile = require('replace-in-file');
const pjson = require('./package.json');

function createFileAndCopyContent(entity, dir, copyFrom){
  // Add file path
  var des = path.resolve('../'+pjson.name+'/'+dir+'/'+entity+'.js');
  var copyFromUrl = path.resolve('../'+pjson.name+'/node-starter-gen/files/'+copyFrom);

  fs.writeFile(des, "", { flag: 'wx' }, (err) => {
    if(err) console.log("write error: "+err);
    fs.copyFile(copyFromUrl, des, (err) => {
      if(err){
        console.log("Copy error: "+err);
      }else{
        replaceItem(entity, dir);
        console.log("Copied from "+copyFromUrl+" successfully");
      }
    });
  });
}

function replaceItem(entity, dir){
  // Add file path
  var des = path.resolve('../'+pjson.name+'/'+dir+'/'+entity+'.js');

  // Capitalize entity first letter
  capitalizedEntity = entity.charAt(0).toUpperCase() + entity.slice(1);
    const fd = fs.openSync(des, "r");
    fs.fchmod(fd, 0o777, (err) => {
      if(err) console.log("error: "+err);
      console.log("File permission change succcessful");
      // Replace string
      const options = {
        files: des,
        from: [/customer/g, /Customer/g],
        to: [entity, capitalizedEntity]
      };
      replaceInFile(options, (err) => {
        if(err) console.log("error: "+err);
        console.log("File content replacement succcessful");
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
