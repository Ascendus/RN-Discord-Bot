<br />
<br />
<br />
<h1 align="center">Discord Nations Bot</h1>
<br />
<p align="center">
    <a href="https://github.com/Ascendus/RN-Discord-Bot/releases" target="_blank">
        <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge&cacheSeconds=2592000" />
    </a>
    <a href="https://https://opensource.org/licenses/BSD-3-Clause" target="_blank">
        <img alt="License" src="https://img.shields.io/github/license/Ascendus/RN-Discord-Bot?style=for-the-badge" />
    </a>        
    <a href="https://github.com/Ascendus/RN-Discord-Bot/issues" target="_blank">
        <img alt="Top language" src="https://img.shields.io/github/issues/Ascendus/DiscordJS-Bot?style=for-the-badge">
    </a>
    <a href="https://github.com/Ascendus/RN-Discord-Bot/search?l=typescript" target="_blank">
        <img alt="Top language" src="https://img.shields.io/github/languages/top/Ascendus/RN-Discord-Bot?style=for-the-badge">
    </a>
</p>

## About
This is the GitHub repository for the Discord bot **Discord Nations Bot**.

* Uses discord.js v13 with slash commands
* Written in TypeScript (compiled to JavaScript) and NodeJS
* Equipped with ESLint and typescript-eslint linters and Prettier formatter as well as hooks for linting (husky and lint-staged)
* Dynamic handlers based on discord-akairo
* Custom logging with chalk
* GitHub workflows (NodeJS and Stale)

## Installation
**NodeJS v16.6.0 or newer is required**
```sh
npm install
```

## Run tests
```sh
npm test
```

## Usage
You will first need to set environment variables (located in .env, in the root directory)
```sh
CLIENT_ID=YOUR_CLIENT_ID
TOKEN=YOUR_TOKEN
```

The token and client ID can be found in your application page on the Discord Developer Portal.

For running the linters and formatter:
```sh
npm run format
```

For running the bot:
```sh
npm run start
```

Please remember that TypeScript files are contained within the `src` folder while JavaScript files are contained within the `dist` folder. Only TypeScript files are to be edited - leave the JavaScript files unless deleting files corresponding to their TypeScript equivalent. If editing TypeScript files, please remember to run `tsc` to compile the code to JavaScript, as the JavaScript code is run, not the TypeScript code. If you would like to compile and run the bot together, run `npm run dev`. 

## Help
If you need any help regarding repository contribution or using the repository itself, feel free to direct message Ascendus#6316 on Discord.

## Issues
Issues are welcome!<br />Feel free to check out the [issues page](https://github.com/Ascendus/RN-Discord-Bot/issues) to either view past issues or submit a new issue.

## License
Copyright :copyright: 2021 Ascendus.<br />
This project is licensed under the [BSD 3 Clause License](https://opensource.org/licenses/BSD-3-Clause).