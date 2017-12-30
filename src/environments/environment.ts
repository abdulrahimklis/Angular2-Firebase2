// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//link of the firebase: https://console.firebase.google.com/project/gs1prod-576c7/database/firestore/data~2Fitems~2FLCO0NDRfL6tN2vQK6EXn

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA7Q5yCJvcojl6Xd9xRB9AIyyJV3FUOq6I",
    authDomain: "gs1prod-576c7.firebaseapp.com",
    databaseURL: "https://gs1prod-576c7.firebaseio.com",
    projectId: "gs1prod-576c7",
    storageBucket: "gs1prod-576c7.appspot.com",
    messagingSenderId: "944555371798"
  }
};
