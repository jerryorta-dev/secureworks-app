# Secureworks Challenge App

A production build of this challenge is hosted on firebase. Navigate to [https://works-app-303e3.firebaseapp.com/](https://works-app-303e3.firebaseapp.com/).

## TOC

* [Apps](#apps)
* [Install](#install)
* [Serve Dev](#serve-dev)
* [Unit Tests](#unit-tests)
* [lint](#lint)
* [Dev Build](#dev-build)
* [Production Build](#production-build)
* [App Generated](#generated)
* [Architecture](#architecture)
* [Angular Element](#angular-element)

## Apps

There are two apps in this repo, `secureworks-app` and `sw-people`. Both apps have package.json scripts to lint, test, and run to simplify commands.

The `secureworks-app` fulfills the requirements of the challenge, while `sw-people` is an attempt to create an Angular Elements bundle using a copy of the 
same feature in the `secureworks-app`.

All commands below are for the challenge in the `secureworks-app`.

## Install

`yarn` is preferred to install dependencies and to run scripts. 

### commands

  ```bash
  npm install yarn -g
  ```
  
  or with HomeBrew on a Mac
  
  ```bash
  brew install yarn
  ```
  
Then to install app

 ```bash
 yarn install
 # or
 npm install
 ```

## Serve Dev

### commands

  ```bash
  npm run serve
  # or
  yarn serve
  ```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Unit Tests

Testing scripts include code coverage and running a `lite-server` to view coverage results.

### commands

  ```bash
  npm run test
  # or
  yarn test
  ```
  
  Then to serve unit test code coverage in your browser:
  
  ```bash
  npm run serve.cc
  # or
  yarn serve.cc
  ```

## Lint

A gulp task runs [Prettier](https://prettier.io/) completely before `ng lint secureworks-app`

### commands

  ```bash
  npm run lint
  # or
  yarn lint
  ```


## Dev Build

The build artifacts will be stored in the `dist/secureworks-app` directory.

### commands

  ```bash
  npm run build
  # or
  yarn build
  ```
  
## Production Build

The build artifacts will be stored in the `dist/secureworks-app` directory.

The build script runs  `ng build secureworks-app --aot --prod` to build the project. 

### commands

  ```bash
  npm run build.prod
  # or
  yarn build.prod
  ```
  
Then run `pm run serve.prod` to serve the production build locally.



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
scenario, `sw-people` will be a feature with all supporting components and services, state engines,  organized in tree directory structure. 
A feature should easily be transferable to another app or platform. 

In this directory `src/app/features/sw-people/`:

`sw-people.module.ts`: Module containing entire `sw-people` feature. Allows easily to transfer to a platform or another app.

`store`:  Store of people added.

`sw-group-bar-chart-container`: Chart Wrapping Component that manages data flow to the chart.

`sw-group-bar-chart-container/sw-group-bar-chart`: Chart Component, holds svg

`sw-group-bar-chart-container/sw-group-bar-chart/sw-d3-group-chart-render.ts`: D3 Code to render chart. Since D3 Code can be complex, this is just 
a separation of D3 Code from Angular for Legibility.

`sw-personal-form`: Form Component For Data Entry

`sw-personal-form/validators`: Custom validators for form.

## Angular Element

An Angular Element of the app is located in `./projects/sw-people`. While I was able to compile the element, the material
styles and angular change detection does not work. So not successful.

To compile and serve, run these command in order:

1. `npm run build.people` or `yarn build.people`  
2. `npm run package.people` or `yarn package.people`  
3. `npm run serve.people` or `yarn serve.people`

Your browser will load a page hosting the element. If it does not open the
page, load the url `http://localhost:8080/` Chrome.
