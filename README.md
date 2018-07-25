# SecureworksApp


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Dev Build

Run `yarn serve` or  `ng build` to build the project. The build artifacts will be stored in the `dist/secureworks-app` directory.


## Production Build

Run `yarn build.prod` or  `ng build --aot --prod` to build the project. The build artifacts will be stored in the `dist/secureworks-app` directory.

Then run 'npm run serve.prod` to serve the producion build locally.

## Hosting
This app is hosted in firebase [here](https://works-app-303e3.firebaseapp.com). Only the hosting feature is used for demo purposes.

## Generated

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8. Additional Material and architectural
features are from my [arhitecture scripts and process](https://uiuxengineering.com/guides/create/material-app).

Add was generated with `ng new secureworks-app --prefix=sw --style=scss`. Therefore components will be prefixed with `sw` -- short for 'SecureWorks'.

## Architecture

### `./src/app/core/`

Directory which components and services are common in the app and lazyloaded level. 
The directory may be named 'common' or something more relevant to the team. But I
reserve 'shared' for modules, components, services shared among lazyloaded modules.

### `./src/app/features/`

I regard a feature as complete functionality of something... chat feature of an app. Semantics, it's a team or team lead decision. In this
scenario, `sw-friends` will be a 'feature'.

#### sw-friends

The entire functionality of the challenge located in `./src/app/features/sw-friends`.

