# gas-boilerplate

Boilerplate for Google Apps Script projects.

## What's included?

* ES6
* Webpack
* Flow
* Prettier
* Eslint

## Prerequisites

1. Connect Google Apps Script to your Google Drive

## Usage for standalone Google Apps Scripts and Node.js

1. Create new Google Apps Script project in Google Drive.
2. Run `yarn build` in the local project folder.
3. Copy and paste the contents of `dist/index.js` to the Google Apps Script file, eg. `Code.gs`.
4. To test the methods select the method from dropdown and press 'Run'.
5. To deploy the script as executable API connect the script to Cloud Platform project: Resources > Cloud Platform project...
6. Enable Google Apps Script API or the Cloud Platform project: Click "View API Console" in the Cloud Platform project modal, search for "Google Apps Script API" and enable it.
7. Create API credentials in Cloud Platform Console: Go to APIs overview -> Select "Credentials" in the sidebar -> Click "Create credentials" > OAuth client ID > Other
8. Use the client ID and client secret in your Node.js client. See an example here [gas-boilerplate-client](https://github.com/vaaralav/gas-boilerplate-client).
9. Deploy the script as API executable: Publish > Deploy as API executable... > Create new version. Use Current API ID as script ID in your client.

## What's coming next?

* [`gas`](https://www.npmjs.com/package/google-apps-script) support
* Instructions for GAS deployment/development flows
