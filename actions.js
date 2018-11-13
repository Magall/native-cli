const { exec } = require('child_process');
module.exports = {
  // Function to init an new project on current folder and copy basic structure to it (core, SPACINNG etc)
  newApp: appName => {
    exec(`react-native init ${appName}`, (err, stdout, stderr) => {
      if (err) {
        console.log('Error could not create the project');
        return;
      } else {
        console.log('Creating project...');
      }
      console.log('Project created');
      // the *entire* stdout and stderr (buffered)
      // console.log(`stdout: ${stdout}`);
      //console.log(`stderr: ${stderr}`);
    });
    console.log('magica');
  }
};
