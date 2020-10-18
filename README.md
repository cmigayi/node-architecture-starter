# node-architecture-starter
Nodejs design architecture that you can reuse to avoid redundant work 
## Installation
Inside your project directory:
> sudo npm install node-architecture-starter --save
## Usage
1. Create a file where you have your package.js file; and name it __generate.js__
> sudo touch generate.js
2. Inside __generate.js__ write and save the following line:
> const ns = require('node-architecture-starter');
3. Execute the following command on your terminal:
> node generate
4. Specify your __project name__ when prompted. Note: Your __project name__ should be the same as your root directory.
5. Type __Y__ when prompted to __Create directories (data, models, controllers, routes, test). Choose Y/N:__
6. Next, provide an __entity name__ (All small letters) when prompted to __Current project (testProject2), Enter entity name (Data model):__. Note: __entity name__ is a name of a table in your database.
7. You should see a list of successful messages displayed as shown below:
* *If everything is successfully, you can exit the console (Ctrl + C)
* *File permission change successful
* *File permission change successful
* *File permission change successful
* *File permission change successful
* *File permission change successful
* *File content replacement successful
* *File content replacement successful
* *File content replacement successful
* *File content replacement successful
* *File content replacement successful

8. As a result of action 5, your project should appear as shown below. _Items in __block__ are the recent generated directories:
* *__controllers__ 
* *__models__
* *__routes__
* *__data__ 
* *__test__
* *node_modules
* *generate.js 
* *package-lock.json
* *package.json

9. As a result of action 6, in each of the following directories (controllers, models, routes, data, test), you should find a file named as __entity name__ you provided with prewritten nodejs code.

10. At this point you are done. You can now continue working on your project.
 

