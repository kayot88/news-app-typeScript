import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBqki_-vKU79HWX8hpMvzCPXQrf-gm2ZUY',
  authDomain: 'news-app-ts.firebaseapp.com',
  databaseURL: 'https://news-app-ts.firebaseio.com',
  projectId: 'news-app-ts',
  storageBucket: 'news-app-ts.appspot.com',
  messagingSenderId: '239459019582',
  appId: '1:239459019582:web:ea094baa53928f299cda6f'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
