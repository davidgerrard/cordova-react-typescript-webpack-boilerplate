# Cordova-React-Typescript-Webpack Boilerplate

## Introduction

This repository contains the basics of what you need to start developing a Cordova application, using React for the UI. You can build and run this on Android, and can add other platforms as you wish.

## Getting Started

I am using versions 8.x of NodeJS and 5.x of NPM in my development environment. You may get an errors in your code compilation if you don't. You can use a tool called ['node version manager'](https://github.com/creationix/nvm) if you want to keep older versions of node/npm installed, but have a play with this.

If you haven't a physical Android device, you can either run an emulator (lots of info on the web about doing this) or add your own device platform (cordova add [platform]).

1. Clone this repo
2. Install Cordova globally (npm install -g cordova)
3. npm install
4. npm run start:android

## Building

Webpack is used to build and compile the project. It runs through the linter before compiling the TypeScript. I have used Babel to get fully compatible JavaScript for Node. 
The output from Webpack (`main.js` and `main.map.js`) are published to the `www/js` folder.

To build the project run the command `npm run build`.

## Linting

There is a tslint configuration included which extends StandardJS standards. Each time the project is built or started, the linter is run.

## Testing

There is no testing currently added to this project. You can steal the basics from my [other repo](https://github.com/davidgerrard/electron-react-typescript-webpack-boilerplate/blob/master/ReadMe.md) though.

## Technologies Used

* [Cordova](https://cordova.apache.org/)
* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [StandardJS](https://standardjs.com/)
