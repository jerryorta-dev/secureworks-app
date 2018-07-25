// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBAHsiCcDUo0rLjwoEe8Ac1pRZHsx6Wokg',
    authDomain: 'works-app-303e3.firebaseapp.com',
    databaseURL: 'https://works-app-303e3.firebaseio.com',
    projectId: 'works-app-303e3',
    storageBucket: 'works-app-303e3.appspot.com',
    messagingSenderId: '550831023163'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
