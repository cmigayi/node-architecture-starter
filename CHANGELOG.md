# Changelog
All notable changes to this project will be documented in this file.


## [1.1.0] - 14-10-2020
### Added
* Generate generate_entity.js file

### Fixed bugs
* none

### Changes
* copyGenerateFile function created to generate generate_entity.js file


## [1.0.3] - 14-10-2020
### Added
* Copy from "npm_modules/node-architecture-starter/node-starter-gen" URL

### Fixed bugs
* none

### Changes
* Updated: For question2 ('Create directories (data, models, controllers, routes, test): Y/N'), moved the Y/N into the quotes.
* Added: If condition statement to check if question2 answer is N or n.


## [1.0.2] - 14-10-2020
### Added
* 3 tty questions (Added new question: Enter the project name:)
* Copy from "npm_modules/node-architecture-starter/node-starter-gen" URL

### Fixed bugs
* tty proceeded to next question when the answer was no, instead of terminating or closing.

### Changes
* Added: New question ( Enter the project name:)
* Removed: Reading project name from package.json
* Added: process.exit(0) was added to force tty to terminate when answer is N.

## [1.0.1] - 14-10-2020
### Added
* Create file
* Replace string
* 2 tty questions
* Copy from "npm_modules/node-architecture-starter/node-starter-gen" URL

### Fixed bugs
*  Async and await error: Temporary reverted to using callbacks

### Changes
* Added: Copy from URL
