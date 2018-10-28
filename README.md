# gas-boilerplate

Boilerplate project for writing Google Apps Script in ES6+ and using NPM packages from node_modules in your project.

## What's included?

- ES6+
- Webpack
- Flow
- Prettier
- Eslint
- Clasp

## Prerequisites

1. Connect Google Apps Script to your Google Drive

## Usage: Bootstrap your Apps Script project

### Getting started

```shell
git clone https://github.com/vaaralav/gas-boilerplate.git my-awesome-project
cd my-awesome-project
rm -rf .git && git init # Initialize your project's git repository
yarn # Install dependencies
yarn clasp login # Login to Google
yarn setup <projectName> # Create an Apps Script project
yarn build # Compile the example project
yarn push # Push the compiled script to the server
```

See clasp documentation for [`create`](https://github.com/google/clasp#create) and/or [`clone`](https://github.com/google/clasp#clone) command if you'd like to edit an existing Apps Script project or bind the project to a Drive file.

### Development

The source files are located at `src/`. To start coding open `src/index.js` in your editor.

To compile and push the project to the server run `yarn build && yarn clasp push`.
After that you can open the project in the browser with `yarn clasp open` and try out your top level functions.

#### Scripts

- `yarn setup <projectName>`: Setup new Apps Script project
- `yarn lint`: Lint your code
- `yarn lint:fix`: Lint and autofix your code (uses prettier & eslint)
- `yarn build`: Compile your code to `dist/index.js`
- `yarn flow-typed`: Update type definitions
- `yarn clasp <command>`: Google Apps Script CLI commands. See [clasp documentation](https://github.com/google/clasp#commands).

## Usage for standalone Google Apps Scripts and Node.js

Steps to create and use your Apps Script project over HTTP API.

1. Create new Google Apps Script project, `yarn setup myProject`.
1. Run `yarn build` in the local project folder.
1. Run `yarn clasp push` to push `dist/index.js` bundle to the Google Apps Script server.
1. To test the methods open the project in online editor ,`yarn clasp open`, and select the method from dropdown and press 'Run'.
1. To deploy the script as executable API connect the script to Cloud Platform project: Resources > Cloud Platform project...
1. Enable Google Apps Script API or the Cloud Platform project: Click "View API Console" in the Cloud Platform project modal, search for "Google Apps Script API" and enable it.
1. Create API credentials in Cloud Platform Console: Go to APIs overview -> Select "Credentials" in the sidebar -> Click "Create credentials" > OAuth client ID > Other
1. Use the client ID and client secret in your Node.js client. See an example here [gas-boilerplate-client](https://github.com/vaaralav/gas-boilerplate-client).
1. Deploy the script as API executable: Publish > Deploy as API executable... > Create new version. Use Current API ID as script ID in your client.
