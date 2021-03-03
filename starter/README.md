## Prerequisites

- install Node
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- `sudo webdriver-manager update`

## Description

- start webdriver: `sudo webdriver-manager start`
- run tests: `npm start`

## Explanation

- The project uses the Page Object Model pattern with:
  - files-page.js
  - modal-page.js
- Login is made through the onPrepare() in conf.js, so that all the tests have the login state taken care of.
